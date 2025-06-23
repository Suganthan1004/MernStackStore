import {Box,Button, Heading, Input, useColorModeValue, VStack} from "@chakra-ui/react";
import React, { useState } from "react";
import {useProductStore} from "../store/product";

const CreatePage = () => {
	const [newProduct, setnewProduct] = useState({
		name: "",
		price: "",	
		image: "",
	});
	const {createProduct} = useProductStore()

	const handleAddProduct = async() => {
		const{success,message}= await createProduct(newProduct)
		console.log("Success:", success)
		console.log("Message:", message)

	}

	return <Container maxW={"container.sm"} >
		<VStack spacing={4} >
			<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>Create New Product</Heading>
			<Box w ={"2xl"} bg ={useColorModeValue("white","gray.900")} p={4} rounded={"lg"} Shadow={"md"}>
			<VStack spacing={4} >
				<Input 
				placeholder="Product Name"
				name="name"
				value={newProduct.name}
				onChange={(e) => setnewProduct({...newProduct, name: e.target.value})}
				/>
				<Input
				placeholder="price"
				name="price"
				type="number"
				value={newProduct.price}
				onChange={(e) => setnewProduct({...newProduct, price: e.target.value})}
				/>
				<Input 
				placeholder="Image URL"
				name="image"
				value={newProduct.image}
				onChange={(e) => setnewProduct({...newProduct, image: e.target.value})}
				/>
			<Button colorScheme={"red"} onClick={handleAddProduct} w ="full">Add Product</Button>
			</VStack>
			</Box>
		</VStack>

	</Container>
};

export default CreatePage;