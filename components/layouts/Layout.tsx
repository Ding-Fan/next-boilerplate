import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import MenuPanel from "./MenuPanel"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <Flex h={"100vh"} overflow="hidden" >
            {/* <Header fixed={true} /> */}
            <MenuPanel />
            <Flex flex="1" overflow={'scroll'} >
                {children}
            </Flex>
            {/* <Footer /> */}
        </Flex>
    )
}