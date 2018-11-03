package com.radicalinsight.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.radicalinsight.models.MoodEvent;

public interface MoodEventRepository extends PagingAndSortingRepository<MoodEvent, Long> {
	List<MoodEvent> findAllByUserId(@Param("userId") Long userId);
}
