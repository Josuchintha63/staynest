package com.staynest.rentalbackend.dto;

public class JwtResponse {

	private String accessToken;
	private String refreshToken;
	private String tokenType = "Bearer";

	private Long id;
	private String email;
	private String fullName;
	private String role;

	public JwtResponse(String accessToken, String refreshToken, Long id, String email, String fullName, String role) {

		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.id = id;
		this.email = email;
		this.fullName = fullName;
		this.role = role;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public String getTokenType() {
		return tokenType;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getFullName() {
		return fullName;
	}

	public String getRole() {
		return role;
	}
}