package com.cloth.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloth.spring.model.DetailsModel;
import com.cloth.spring.model.LoginModel;
import com.cloth.spring.repository.Detailsrepo;
import com.cloth.spring.repository.Loginrepo;

@Service
public class clothservice {
	
	@Autowired
	private Detailsrepo Detailsrepo;
	@Autowired
	private Loginrepo Loginrepo;

	//Login Logic
	public String Login(String username, String password) {
		LoginModel user = Loginrepo.findByusername(username);
		if (user == null) {
			return "invalidusername";
		} else {
			if (user.getPassword().equals(password)) {
				return "success";
			} else {
				return "invalidpassword";
			}
		}
	}

	//Signup Logic
	public String Signup(LoginModel user) {
	    String username = user.getUsername();
	    LoginModel Loginuser = Loginrepo.findByusername(username);
	    if (Loginuser == null) {
	       Loginrepo.save(user);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}

	// Get 
	public List<DetailsModel> getData() {
		return Detailsrepo.findAll();
	}
	
	// Post
	public DetailsModel addData(DetailsModel data) {
		return Detailsrepo.save(data);
	}
	
	// Edit (modify if data exists and save, else don't save)
	public DetailsModel editData(DetailsModel data, Long id) {
		DetailsModel edx = Detailsrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setProductname(data.getProductname());
			edx.setCounts(data.getCounts());
			edx.setSize(data.getSize());
			edx.setRating(data.getRating());
			
			return Detailsrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	
	//Delete
	public String deleteData(Long id) {
		Detailsrepo.deleteById(id);
		return "Deleted Successfully";
	}
	
	//Find by ID
	public Optional<DetailsModel> findbyID(Long id) {
		return Detailsrepo.findById(id);
	}
	
	
}
