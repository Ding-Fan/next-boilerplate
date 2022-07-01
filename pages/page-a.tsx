import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'
import { NextPageWithLayout } from './_app'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const PageA: NextPageWithLayout = (props: Props) => {
  return (
    <Box flex="1"  >
      <Box textStyle={"h1"}>
      </Box>
      <Heading size="4xl" >
        header
      </Heading>
      <Heading size="xl" >
        sub header
      </Heading>
      <Divider />

      <Flex>
        <InputGroup size='lg'>
          <Input placeholder='mysite' />
          <InputRightElement >
            <Button variant={'ghost'} fontSize={'2xl'}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex>
          <Button variant={'ghost'}>
          haha
          </Button>
          <Divider orientation='vertical' />
          <Button variant={'ghost'}>
          not haha
          </Button>
        </Flex>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel>
          
          </FormLabel>
        </FormControl>
      </Flex>

    </Box>
  )
}


PageA.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default PageA