java
====

[![Build Status](https://travis-ci.org/kbrebanov/ansible-java.svg?branch=master)](https://travis-ci.org/kbrebanov/ansible-java)

Installs Java

Requirements
------------

This role requires Ansible 1.9 or higher.

Role Variables
--------------

| Name                           | Default | Description                                           |
|:-------------------------------|:--------|:------------------------------------------------------|
| java_implementation            | openjdk | Java implementation to install, openjdk or oracle     |
| java_openjdk_version           | 8       | Version of OpenJDK Java to install                    |
| java_openjdk_headless          | false   | Select 'Complete' vs 'Headless' install for OpenJDK   |
| java_openjdk_jre_only          | false   | Select JDK vs Java Runtime Environment for OpenJDK    |
| java_openjdk_use_ppa           | true    | Add the OpenJDK-R Java PPA to repositories list       |
| java_oracle_version            | 8       | Version of Oracle Java to install                     |
| java_oracle_install_jce_policy | false   | Enable/Disable installation of Oracle Java JCE policy |

Dependencies
------------

None

Example Playbook
----------------

Install OpenJDK Java 8
```yaml
- hosts: all
  roles:
    - kbrebanov.java
```

Install OpenJDK Java 7 (headless, JRE-only)
```yaml
- hosts: all
  vars:
    java_openjdk_version: 7
    java_headless: true
    java_jre_only: true
  roles:
    - kbrebanov.java
```

Install Oracle Java 8
```yaml
- hosts: all
  vars:
    java_implementation: oracle
  roles:
    - kbrebanov.java
```

Install Oracle Java 8 and JCE policy
```yaml
- hosts: all
  vars:
    java_implementation: oracle
    java_oracle_install_jce_policy: true
  roles:
    - kbrebanov.java
```

Install Oracle Java 7
```yaml
- hosts: all
  vars:
    java_implementation: oracle
    java_oracle_version: 7
  roles:
    - kbrebanov.java
```

Install Oracle Java 7 and JCE policy
```yaml
- hosts: all
  vars:
    java_implementation: oracle
    java_oracle_version: 7
    java_oracle_install_jce_policy: true
  roles:
    - kbrebanov.java
```

License
-------

BSD

Author Information
------------------

Kevin Brebanov
