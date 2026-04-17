package com.malmal.kiosk.repository;

import com.malmal.kiosk.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    // 특정 카테고리의 메뉴들만 가져오고 싶을 때를 대비한 메서드
    List<Menu> findByCategory(String category);
}
