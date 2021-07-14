import {React, useRef, useLayoutEffect} from 'react'

export default function CustomEls({ URL }) {
    // useRef to avoid re-renders
    const customEls = useRef(false);
  
    useLayoutEffect(() => {
      if (customEls.current) {
        return;
      }
      
      const { setBasePath } = require("@shoelace-style/shoelace/dist/utilities/base-path");
  
      setBasePath(`${URL}/static/static`);
      
      // This imports all components
      require("@shoelace-style/shoelace/dist/shoelace");
  
      // If you want to selectively import components, replace this line with your own definitions
      // require("@shoelace-style/shoelace/dist/components/button/button");
  
      customEls.current = true;
    }, [URL, customEls]);
  
    return null;
  }
  