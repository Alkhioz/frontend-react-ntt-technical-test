import { useState } from 'react';
import './logo.component.css';

type LogoProps = {
    src: string;
}

export function Logo({
    src,
}: LogoProps) {
    const [imageExists, setImageExists] = useState(true);
    return (
        <div className='logo'>
            {
                imageExists
                    ? <img className='logoImage'
                        src={src}
                        aria-hidden="true"
                        onError={() => {
                            setImageExists(false);
                        }}
                    />
                    : <svg
                        width="52.916668mm"
                        height="52.916668mm"
                        viewBox="0 0 52.916668 52.916668"
                        version="1.1"
                        id="svg1"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <defs
                            id="defs1" />
                        <g
                            id="layer1"
                            transform="translate(-25.624485,-41.243221)">
                            <rect
                            style={{ 
                                fill: '#6f6e74',
                                strokeWidth: '0.515709',
                                fillOpacity: "1",
                            }} 
                                id="rect1"
                                width="52.916668"
                                height="52.916668"
                                x="25.624485"
                                y="41.243221"
                                rx="0"
                                ry="0" />
                        </g>
                    </svg>
            }

        </div>
    )
}