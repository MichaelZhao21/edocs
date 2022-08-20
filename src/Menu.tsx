import React from 'react';
import Image from 'next/image';

const Menu = () => {
    return (
        <React.Fragment>
            <div style={{ height: '5rem', padding: '1rem' }} />
            <div
                style={{
                    height: '5rem',
                    width: '100%',
                    position: 'fixed',
                    padding: '1rem',
                    display: 'flex',
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    backgroundColor: '#212121',
                }}
            >
                <div
                    style={{
                        marginLeft: '1rem',
                        width: '10rem',
                        flexGrow: 0,
                        position: 'relative',
                    }}
                >
                    <Image src="/edocs.png" layout="fill" objectFit="contain" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Menu;
