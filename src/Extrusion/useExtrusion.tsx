import React from "react";

export function useExtrusion() {
    const [isLinear, setLineal] = React.useState(true);
    const root = React.useRef<any>();

    return {
        root,
        reset: () => {
            root.current
                .querySelectorAll("input")
                .forEach( (input: any) => input.value = 0);
        },
        linear: {
            label: {
                disabled: !isLinear,
            },
            checkbox: {
                checked: isLinear,
                onCheckedChange: (checked: boolean) => !isLinear && setLineal(checked)
            },
            input: {
                disabled: !isLinear,
            }
        },
        variable: {
            label: {
                disabled: isLinear,
            },
            checkbox: {
                checked: !isLinear,
                onCheckedChange: (checked: boolean) => isLinear && setLineal(!checked)
            },
            min: {
                label: {
                    disabled: isLinear,
                },
                input: {
                    disabled: isLinear,
                }
            },
            max: {
                label: {
                    disabled: isLinear,
                },
                input: {
                    disabled: isLinear,
                }
            }
        }
    }
}