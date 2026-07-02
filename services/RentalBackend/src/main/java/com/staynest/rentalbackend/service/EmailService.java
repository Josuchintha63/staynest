package com.staynest.rentalbackend.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

	public void sendEmail(String to, String subject, String body) {

		// TODO:
		// integrate JavaMailSender
		// or SendGrid/Mailgun API

		System.out.println("EMAIL SENT");

		System.out.println("To: " + to);

		System.out.println("Subject: " + subject);

		System.out.println(body);
	}
}
