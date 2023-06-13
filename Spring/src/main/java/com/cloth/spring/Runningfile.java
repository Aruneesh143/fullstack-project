package com.cloth.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication

//Swagger UI Header Configuration

@OpenAPIDefinition(
		info =@Info(
				// Swagger Documentation Title
				title = "FULL STACK PROJECT",
				// API Version info
				version = "1.0.2",
				description = "PROJECT",
				contact = @Contact(
						
						// API Author
						name = "ARUNEESH",
						
						// Author e-mail
						email = "aruneesh007@gmail.com"
						)
				)
		)


public class Runningfile {

	public static void main(String[] args) {
		SpringApplication.run(Runningfile.class, args);
	}

}
