const Device = {
    // device-width
    $IPHONE5 : 320,
    $MOBILE : 480,
    $TABLET : 768,
    $NOTEBOOK: 1060,
    $DESKTOP: 1920,
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
