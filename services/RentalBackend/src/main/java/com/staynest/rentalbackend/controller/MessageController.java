package com.staynest.rentalbackend.controller;

import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.MessageRequest;
import com.staynest.rentalbackend.entity.Message;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.security.UserDetailsImpl;
import com.staynest.rentalbackend.service.MessageService;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {

	private final MessageService messageService;

	public MessageController(MessageService messageService) {

		this.messageService = messageService;
	}

	@PostMapping
	public Message send(@Valid @RequestBody MessageRequest request,
			@AuthenticationPrincipal UserDetailsImpl principal) {

		User sender = new User();
		sender.setId(principal.getId());

		return messageService.sendMessage(request, sender);
	}

	@GetMapping("/{bookingId}")
	public List<Message> getMessages(@PathVariable Long bookingId) {

		return messageService.getMessages(bookingId);
	}
}
