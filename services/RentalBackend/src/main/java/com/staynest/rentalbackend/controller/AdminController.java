package com.staynest.rentalbackend.controller;

import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.AnalyticsSummaryResponse;
import com.staynest.rentalbackend.entity.HostApplication;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.service.AdminService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

	private final AdminService adminService;

	public AdminController(AdminService adminService) {

		this.adminService = adminService;
	}

	@GetMapping("/analytics")
	public AnalyticsSummaryResponse analytics() {

		return adminService.getAnalytics();
	}

	@PutMapping("/host-applications/{id}/approve")
	public HostApplication approve(@PathVariable Long id) {

		return adminService.approveHost(id);
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return adminService.getUsers();
	}

	@PutMapping("/users/{id}/status")
	public User updateUserStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
		String status = body.get("status");
		return adminService.updateUserStatus(id, status);
	}
}