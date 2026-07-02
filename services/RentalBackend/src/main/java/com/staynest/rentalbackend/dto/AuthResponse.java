package com.staynest.rentalbackend.dto;

public class AuthResponse {

	private String accessToken;
	private String refreshToken;
	private String tokenType = "Bearer";

	private Long userId;
	private String email;
	private String fullName;
	private String role;

	public AuthResponse() {
		
	}

	public AuthResponse(String accessToken, String refreshToken, Long userId, String email, String fullName,
			String role) {

		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.userId = userId;
		this.email = email;
		this.fullName = fullName;
		this.role = role;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	public String getTokenType() {
		return tokenType;
	}

	public Long getUserId() {
		return userId;
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