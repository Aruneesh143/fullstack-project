package com.cloth.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloth.spring.model.DetailsModel;

public interface Detailsrepo extends JpaRepository<DetailsModel, Long> {

}
