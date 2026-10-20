package com.alok.jobApplication.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alok.jobApplication.model.JobPost;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {

	
    List<JobPost> findByPostProfileContainingOrPostDescContaining(String postProfile, String postDesc);

    @org.springframework.data.jpa.repository.Query("SELECT COALESCE(MAX(j.postId), 0) FROM JobPost j")
    Integer findMaxPostId();
}
