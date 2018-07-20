package com.project.memepage.model;

import com.project.memepage.repository.MemepageRepository;
import org.hibernate.mapping.Collection;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.nio.file.attribute.UserPrincipalNotFoundException;

public class CustomUserDetails extends User
    implements UserDetails {
        public CustomUserDetails(User u) {
            super(u);
        }
        public Collection getAuthorities() {

            return AuthorityUtils.createAuthorityList("ROLE_USER");
        }
        public String getUsername() {
            return getUsername();
        }
        public boolean isEnabled() {
            return true;
        }
        public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
            User user = userRepository.findByUserName(username);
            if(user == null) {
                throw new UserPrincipalNotFoundException();
            }
        return new CustomUserDetails(user);
        }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }
}


