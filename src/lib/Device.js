const Device = {
    // device-width
    $IPHONE5 : '320px',
    $MOBILE : '480px',
    $TABLET : '768px',
    $NOTEBOOK: '1060px',
    $DESKTOP: '1920px',
}


export const Boundary = {
    $OVER_IPHONE5 : Device.$IPHONE5 + 1,
    $OVER_MOBILE : Device.$MOBILE + 1,
    $OVER_TABLET : Device.$TABLET + 1,
    $OVER_NOTEBOOK : Device.$NOTEBOOK + 1,
    $UNDER_DESKTOP : Device.$DESKTOP,
    $UNDER_NOTEBOOK : Device.$NOTEBOOK,
    $UNDER_TABLET : Device.$TABLET,
    $UNDER_IPHONE5 : Device.$IPHONE5,
}

export default Device;
