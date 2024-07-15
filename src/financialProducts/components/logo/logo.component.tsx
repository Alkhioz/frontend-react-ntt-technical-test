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
        <div className="logoContainer">
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
                        : <>JG</>
                }
            </div>
        </div>
    )
}