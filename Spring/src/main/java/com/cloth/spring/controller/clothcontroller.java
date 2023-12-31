package com.cloth.spring.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloth.spring.model.DetailsModel;
import com.cloth.spring.model.LoginModel;
import com.cloth.spring.service.clothservice;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class clothcontroller {
	@Autowired
	private clothservice service;

	// Auth
	@Tag(name = "Signin", description = "Login Endpoint")
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String username = xLogin.get("username");
	    String password = xLogin.get("password");
	    String result = service.Login(username, password);
	    return result;
	}

	@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody LoginModel user) {
        return service.Signup(user);
    }
	
	// Products
	@Tag(name = "List Products", description = "List All Products")
	@GetMapping("/list")
	private List<DetailsModel> Games(){
		return service.getData();
	}
	
	@Tag(name = "Sort Product by ID", description = "View indudual Product Data")
	@GetMapping("/data/{id}")
	private Optional<DetailsModel> viewGame(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@Tag(name = "Add Product", description = "Add New Product")
	@PostMapping("/add")
	private DetailsModel addProduct(@RequestBody DetailsModel data) {
		return service.addData(data);
	}
	
	@Tag(name = "Edit Product", description = "Edit Existing Product")
	@PutMapping("/edit/{id}")
	private DetailsModel editProduct(@PathVariable Long id, @RequestBody DetailsModel data) {
		return service.editData(data, id);
	}
	
	@Tag(name = "Delete Data", description = "Delete The Existing Product")
	@DeleteMapping("/delete/{id}")
	private String deleteProduct(@PathVariable Long id) {
		return service.deleteData(id);
	}
	
}
