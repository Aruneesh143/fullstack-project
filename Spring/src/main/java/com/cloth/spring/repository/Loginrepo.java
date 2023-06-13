package com.cloth.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloth.spring.model.LoginModel;

public interface Loginrepo extends JpaRepository<LoginModel, Long> {

	LoginModel findByusername(String username);

}
