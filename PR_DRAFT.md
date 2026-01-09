PR Title: CLMM Stake, Refactor, and Project Hygiene Improvements

Summary
-------
This PR introduces the CakeSwap CLMM stake endpoint, refactors and organizes scripts, and enforces project hygiene for maintainability and clarity.

DEPENDCIES
----------
- This is the 2nd stage in the process in exposing the PancakeSwap CLMM pools.
- The 1st stage and REQUIRED initial step is the re-introduction of the PancakeSwap API endpoints for the Fateway to consume.

Key Changes
-----------
- Added POST /gateway/clmm/stake endpoint and supporting models, client methods, and tests.
- Migrated and renamed CLMM-related scripts for semantic clarity (CLMM prefixing, demo scripts moved to `scripts/demos`, utility scripts to `scripts`).
- Created design docs dir `.DesignDocs`. to centerally host guideance docs for easy AI ingestion.
- Added concise test guidelines and scaffolding for consistent testing.
- Added a indicator flag to be used on PancakeSwap Contracts indicating that can be staked.
  - Opted for a flag for the cases where the LP investment is human directed to known stakable LP farm
  - instead of via object property discovery or aditional external calls.

Rationale
---------
- Completes the CLMM lifecycle by enabling position staking and event recording.
- Improves codebase clarity and maintainability by enforcing semantic naming and directory structure.
- Ensures only essential changes are present, reducing review overhead and future merge conflicts.
- Provides a foundation for reliable CI and easier onboarding for contributors.
  - Allows you to Address the issues with the BSC naming convertion paradigm difference between title and chain, and API vs Gateway which can cause the generic router to be utilized instead of the mainet-bsc

Testing & Validation
--------------------
- All new and refactored scripts tested locally and in Docker test-stage image.
- Unit tests for CLMM stake endpoint cover both success and edge cases.
- Test guidelines and scaffolding validated with new and existing tests.


Reviewer Checklist
------------------
- [ ] CLMM stake endpoint and models are correct
- [ ] Project structure and naming are clear and consistent
- [ ] Only meaningful code changes are present
- [ ] Tests and guidelines are sufficient
- [ ] Ready for feature branch replication and cleanup

Notes
-----
