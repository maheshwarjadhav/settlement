package com.settlement.file;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.settlement.file.property.FileStorageProperties;

@SpringBootApplication(scanBasePackages = {"com.settlement"})
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class FileApplication {
	public static void main(String[] args) {
        SpringApplication.run(FileApplication.class, args);
    }
}
