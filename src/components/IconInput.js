import React from 'react'

export default function IconInput(props) {
    const { icon, children } = props

    if (icon) {
        return (
            <div style={{ position: 'relative' }}>
                {children}
                <img
                    src={icon}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '1rem',
                        objectFit: 'contain',
                        height: '1.5rem',
                        width: '1.5rem',
                    }}
                />
            </div>
        )
    }

    if (React.isValidElement(children)) {
        return React.cloneElement(children, { icon: false });
    }

    return children
}