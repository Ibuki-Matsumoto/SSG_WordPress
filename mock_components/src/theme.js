// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode confi
const color = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: 'gray.400',
                color: 'white',
            },
            // styles for the `a`
            a: {
                color: 'teal.500',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
})
// 3. extend the theme
const theme = extendTheme({ color })

export default theme