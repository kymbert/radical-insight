package com.radicalinsight.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.radicalinsight.models.AppUser;

public interface AppUserRepository extends PagingAndSortingRepository<AppUser, Long> {

}