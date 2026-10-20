package com.alok.jobApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.alok.jobApplication.model.AppUser;
import com.alok.jobApplication.repo.UserRepo;
import com.alok.jobApplication.service.JobService;

@SpringBootApplication
@EnableScheduling
public class SpringBootRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(JobService jobService, UserRepo userRepo, PasswordEncoder passwordEncoder) {
		return args -> {
			// Auto load initial jobs if not present
			try {
				jobService.load();
				System.out.println(">>> Sample jobs initialized successfully!");
			} catch (Exception e) {
				System.err.println(">>> Error loading initial jobs: " + e.getMessage());
			}

			// Seed default Admin if not present
			if (userRepo.findByEmail("admin@jobapp.com").isEmpty()) {
				AppUser admin = new AppUser(null, "Admin User", "admin@jobapp.com", passwordEncoder.encode("admin123"), "ADMIN");
				userRepo.save(admin);
				System.out.println(">>> Default Admin created: admin@jobapp.com / admin123");
			}

			// Seed default User if not present
			if (userRepo.findByEmail("user@jobapp.com").isEmpty()) {
				AppUser user = new AppUser(null, "Test User", "user@jobapp.com", passwordEncoder.encode("user123"), "USER");
				userRepo.save(user);
				System.out.println(">>> Default User created: user@jobapp.com / user123");
			}
		};
	}
}

