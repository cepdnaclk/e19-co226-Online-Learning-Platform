package com.learnedge.backend.config;

import com.learnedge.backend.entity.User;
import com.learnedge.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){
        return args -> {
            User user1 = new User(
                    1L, "ejgks", "Pumudu", "Nadun", "pumudu@gmail.com", "07023452334", new Date(2022,3,2), new Date(2002,2,2)
            );

            repository.saveAll(List.of(user1));
        };
    }
}
