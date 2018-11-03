package com.radicalinsight.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.radicalinsight.models.AppUser;
import com.radicalinsight.models.MoodEvent;
import com.radicalinsight.repositories.AppUserRepository;
import com.radicalinsight.repositories.MoodEventRepository;

@RestController
public class AppUserController {

	private final AppUserRepository userRepository;
	private final MoodEventRepository moodRepository;
	
	AppUserController(AppUserRepository userRepository, MoodEventRepository moodRepository) {
		this.userRepository = userRepository;
		this.moodRepository = moodRepository;
	}
	
	@GetMapping(value = "/users")
	List<AppUser> all() {
		return (List<AppUser>) userRepository.findAll();
	}
	
	@PostMapping(value = "/users")
	AppUser newUser(@RequestBody AppUser newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/users/{id}")
	Optional<AppUser> one(@PathVariable Long id) {
		return userRepository.findById(id);
	}
	
	@DeleteMapping("/users/{id}")
	void deleteUser(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
	
	@GetMapping("users/{id}/moodevents")
	List<MoodEvent> getMoodEvents(@PathVariable Long id) {
		return moodRepository.findAllByUserId(id);
	}
	
	@PostMapping("users/{id}/moodevents")
	MoodEvent newMoodEvent(@PathVariable Long id, @RequestBody MoodEvent moodEvent) {
		moodEvent.setUserId(id);
		return moodRepository.save(moodEvent);
	}
}
