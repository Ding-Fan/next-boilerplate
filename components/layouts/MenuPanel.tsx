import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from "next/link"

type Props = {}

const MenuPanel = (props: Props) => {
  return (
    <Box borderWidth={1}>
      this is the menu panel

      <div >
        <NextLink href='/' passHref >
          <Link>
            home
          </Link>
        </NextLink>
      </div>
      <div >
        <NextLink href='/page-a' passHref >
          <Link>
            page a
          </Link>
        </NextLink>
      </div>
    </Box>
  )
}

export default MenuPanel