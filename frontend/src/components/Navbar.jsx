import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";
import { MoonIcon, PlusSquareIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {useProductStore} from "../store/product";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const {Products} = useProductStore()
	return (
		<Container maxW={"1100px"} px = {4}>
			<Flex
			h={"100px"}
			alignItems={"center"}
			justifyContent={"space-between"}
			flexDirection={
				{ base: "column", sm: "row" }
			}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight='extrabold'
					textTransform='uppercase'
					textAlign='center'
					bgGradient='linear(to-l,#ffe100,#dd6204)'
					bgClip='text'
				>
  					<Link to={"/"}>Steal Deal</Link>
				</Text>
				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
					<IconButton 
					variant="ghost"
					aria-label="Create a new post"
					icon={<PlusSquareIcon boxSize={6} color="gray.600" />}>
						
					</IconButton>
					</Link>
					<IconButton 
					aria-label="Toggle Color Mode"
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					onClick={toggleColorMode} 
					variant="ghost"> 
					</IconButton>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;