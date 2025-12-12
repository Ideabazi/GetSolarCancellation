// Google Analytics integration
// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Initialize Meta Pixel (Facebook)
export const initMetaPixel = () => {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  if (!pixelId) {
    console.warn('Missing Meta Pixel ID: VITE_META_PIXEL_ID - Meta/Facebook conversion tracking disabled');
    return;
  }

  // Add Meta Pixel script
  const script = document.createElement('script');
  script.textContent = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  // Add noscript pixel
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.body.appendChild(noscript);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (window.gtag) {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: url
      });
    }
  }
  
  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Meta Pixel - map to standard events
  if (window.fbq) {
    // Map common actions to Meta standard events
    const metaEventMap: Record<string, string> = {
      'form_submit': 'Lead',
      'quiz_complete': 'CompleteRegistration',
      'contact_click': 'Contact',
      'phone_click': 'Contact',
    };
    
    const metaEvent = metaEventMap[action] || 'CustomEvent';
    if (metaEvent === 'CustomEvent') {
      window.fbq('trackCustom', action, {
        category,
        label,
        value,
      });
    } else {
      window.fbq('track', metaEvent, {
        content_name: label,
        value: value,
      });
    }
  }
};

// Track lead submission (conversion event)
export const trackLeadSubmission = (formType: 'hero' | 'quiz' | 'contact' | 'hero_es' | 'quiz_es') => {
  trackEvent('form_submit', 'lead_generation', formType);
  
  // Additional conversion tracking for ads
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: `${formType}_form`,
      content_category: 'lead_generation',
    });
  }
};
