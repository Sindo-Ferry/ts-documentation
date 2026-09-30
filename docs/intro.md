---
id: intro
title: Terminal Portal Documentation
sidebar_label: Overview
sidebar_position: 0
slug: /
description: Operating documentation for the Sindo Ferry terminal and operator portals.
---

## Getting started

New user? Both terminal staff and ferry operators must
**[register an account](/register-account)** first — sign up, confirm your
email, and get activated by an administrator before signing in.

Curious why access works that way? **[How Sign-In and Access Work](/how-sign-in-works)**
explains the three user records, how they connect by email, and how long a
session lasts.

## Audiences

- **[Terminal Staff](/terminal-staff/)** — operating the **Terminal Portal**
  (`ts-terminal.sindoferry.com.sg`): current trips, passenger check-in, departures, and more.
- **[Ferry Operator](/ferry-operator/)** — using the **Operator Portal**
  (`ts-operator.sindoferry.com.sg`).
- **[Public / Passengers](/public-live-tv)** — the no-login **Live TV** departure
  boards shown on terminal monitors.

## Terminal Staff guides

**Common**

- [Sign In to the Terminal Portal](/terminal-staff/sign-in)
- [Set Port Context](/terminal-staff/set-port-context)

**[Administrator](/terminal-administrator)** — roles, users and access

- [Add a New Role](/terminal-administrator/add-role) ·
  [Manage a Role's Permissions](/terminal-administrator/manage-role-permissions) ·
  [Edit or Delete a Role](/terminal-administrator/edit-delete-role)
- [Add a New User](/terminal-administrator/add-user) ·
  [Activate or Deactivate a User](/terminal-administrator/activate-deactivate-user) ·
  [Delete a User](/terminal-administrator/delete-user)
- [Assign a Role to a User](/terminal-administrator/assign-role) ·
  [Manage a User's Direct Permissions](/terminal-administrator/manage-user-permissions) ·
  [Grant or Revoke the Admin Role](/terminal-administrator/grant-revoke-admin)

**[Master Data Setup](/terminal-staff/master-data)** — set up once, changed rarely

- [Operators](/terminal-staff/operators) — ferry operator master data
- [Vessels](/terminal-staff/vessels) — manage the ferries used for trips
- [Ports](/terminal-staff/ports) — terminals, with timezone
- [Gates](/terminal-staff/gates) — boarding gates per port
- [Berths](/terminal-staff/berths) — berths per port
- [Routes](/terminal-staff/routes) — origin → destination routes
- [Countries](/terminal-staff/countries) — nationality list, popular flag & holiday scoping

**[Terminal Operator](/terminal-operator)** — the day-to-day operation

[Operations](/terminal-operator/operations) — build the schedule and get trips ready

- [Configure Public Holiday](/terminal-operator/configure-public-holiday) — per-country holiday dates
- [Create a Timeslot](/terminal-operator/create-timeslot) — recurring weekly schedule templates
- [Generate Trips from Timeslots](/terminal-operator/generate-trips) — Trip Sync Jobs
- [Create an Ad Hoc Trip](/terminal-operator/create-ad-hoc-trip) — one-off sailings
- [Cancel and Restore a Trip](/terminal-operator/cancel-restore-trip)
- [Set a Trip as Boarding](/terminal-operator/set-trip-as-boarding) — assign gate & berth
- [Update Timings](/terminal-operator/update-timings) — gate times & delays

[Pre-Immigration](/terminal-operator/pre-immigration) — the first scan point

- [Scan a Boarding Pass](/terminal-operator/pre-immigration-scan)
- [Revert Pre-Immigration](/terminal-operator/revert-pre-immigration)
- [Passenger Display Setup](/terminal-operator/pre-immigration-display)

[Boarding](/terminal-operator/boarding) — the gate

- [Scan a Boarding Pass](/terminal-operator/boarding-scan)
- [Revert Boarding](/terminal-operator/revert-boarding)
- [Last Call](/terminal-operator/last-call)
- [Set a Trip as Close](/terminal-operator/set-trip-as-close) ·
  [Set a Trip as Depart](/terminal-operator/set-trip-as-depart)
- [Passenger Display Setup](/terminal-operator/boarding-display)

[General Support](/terminal-operator/general-support) — the counter beside the flow

- [Look Up a Passenger](/terminal-operator/look-up-passenger) — read-only search across all trips
- [Check In an NTL / LM Passenger](/terminal-operator/check-in-ntl-lm)
- [Edit a Checked-In Passenger's Details](/terminal-operator/edit-passenger)
- [Cancel a Passenger](/terminal-operator/cancel-passenger) ·
  [Update a Passenger's Status](/terminal-operator/update-passenger-status)
- [Reprint or Download a Boarding Pass](/terminal-operator/reprint-boarding-pass)
- [Download the Manifest](/terminal-operator/download-manifest)
- [Export Other Reports](/terminal-operator/export-other-reports) — Passenger Manifest, Passenger Summary, Daily Passenger Report

## Ferry Operator guides

Getting in

- [Sign In to the Operator Portal](/ferry-operator/sign-in)
- [Switch Operator](/ferry-operator/switch-operator) — move between workspaces

[Administrator](/operator-administrator) — roles, users and access

- [Add a New Role](/operator-administrator/add-role) ·
  [Manage a Role's Permissions](/operator-administrator/manage-role-permissions) ·
  [Edit or Delete a Role](/operator-administrator/edit-delete-role)
- [Add a New User](/operator-administrator/add-user) ·
  [Activate or Deactivate a User](/operator-administrator/activate-deactivate-user) ·
  [Delete a User](/operator-administrator/delete-user)
- [Assign a Role to a User](/operator-administrator/assign-role) ·
  [Manage a User's Direct Permissions](/operator-administrator/manage-user-permissions) ·
  [Grant or Revoke the Admin Role](/operator-administrator/grant-revoke-admin)

Looking things up (read-only)

- [Look Up a Vessel](/ferry-operator/look-up-vessel) — capacity and active status
- [Look Up a Timeslot](/ferry-operator/look-up-timeslot) — your recurring schedule
- [Look Up a Trip](/ferry-operator/look-up-trip) — the weekly grid and trip detail
- [Look Up a Passenger](/ferry-operator/look-up-passenger) — upcoming scheduled trips

Running the day

- [Change a Trip's Vessel](/ferry-operator/change-trip-vessel) — one specific trip or select multiple trips
- [Check In a Passenger](/ferry-operator/check-in-passenger) — including editing and cancelling
- [Reprint or Download a Boarding Pass](/ferry-operator/reprint-boarding-pass)

Manifests

- [Download the Manifest](/ferry-operator/download-manifest) — Excel, boarded passengers
- [Export the Passenger Manifest Report](/ferry-operator/export-manifest-report) — PDF/Excel, any status, optional password
