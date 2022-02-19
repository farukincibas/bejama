import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            BORDER_LINE: string;
            DARK: string;
            WHITE: string;
            PAGINATE_DISABLED: string;
        };
    }
}