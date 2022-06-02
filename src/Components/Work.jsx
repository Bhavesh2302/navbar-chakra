import styles from "./styles.module.css"

import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
} from "@chakra-ui/react"
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import React from "react"

const Work=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Menu isOpen={isOpen}   style={{width:"20vw",display:"flex"}}>

            <MenuButton 
                variant="ghost"
                size="400"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
            //    _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
             fontWeight="normal"
             
            onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                Find Work
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{width:"20vw"}} >
                <MenuItem>Job Board</MenuItem>
                <MenuItem>Freelance Projects</MenuItem>
              
            </MenuList>
        


        </Menu>
        
    )
}
export default Work