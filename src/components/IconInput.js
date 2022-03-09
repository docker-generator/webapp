import React from 'react'

export default function IconInput(props) {
    const { icon, children } = props
    console.log(icon);
    if (icon) {
        return (
            <div style={{ position: 'relative' }}>
                {React.cloneElement(children, { icon: true })}
                <img
                    src={icon}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '0.6rem',
                        left: '0.9rem',
                        objectFit: 'contain',
                        height: '1.3rem',
                        width: '1.3rem',
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
