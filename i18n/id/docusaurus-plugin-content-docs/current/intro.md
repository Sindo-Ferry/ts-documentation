---
id: intro
title: Dokumentasi Terminal Portal
sidebar_label: Ringkasan
sidebar_position: 0
slug: /
description: Dokumentasi operasional untuk portal terminal dan portal operator Sindo Ferry.
---

:::info[Tentang terjemahan ini]
Nama menu, tombol, dan status ditulis **dalam bahasa Inggris**, persis seperti yang
muncul di portal — misalnya menu **Vessels**, tombol **Set As Boarding**, atau status
**CheckedIn** — agar mudah dicocokkan dengan layar. Istilah **Pre-Immigration**,
**Boarding**, dan **read-only** juga tidak diterjemahkan. Halaman yang belum diterjemahkan ditampilkan dalam
bahasa Inggris.
:::

## Memulai {/* #getting-started */}

Pengguna baru? Staf terminal maupun operator feri harus
**[mendaftarkan akun](/register-account)** terlebih dahulu — daftar, konfirmasi
email Anda, lalu minta administrator mengaktifkan akun Anda sebelum masuk.

Ingin tahu mengapa akses bekerja seperti itu?
**[Cara Kerja Masuk dan Akses](/how-sign-in-works)** menjelaskan tiga catatan
pengguna, bagaimana ketiganya terhubung melalui email, dan berapa lama sesi berlaku.

## Pengguna {/* #audiences */}

- **[Staf Terminal](/terminal-staff/)** — mengoperasikan **Terminal Portal**
  (`ts-terminal.sindoferry.com.sg`): perjalanan hari ini, check-in penumpang,
  keberangkatan, dan lainnya.
- **[Operator Feri](/ferry-operator/)** — menggunakan **Operator Portal**
  (`ts-operator.sindoferry.com.sg`).
- **[Publik / Penumpang](/public-live-tv)** — papan keberangkatan **Live TV** tanpa
  login yang ditampilkan di monitor terminal.

## Panduan Staf Terminal {/* #terminal-staff-guides */}

**Umum**

- [Masuk ke Terminal Portal](/terminal-staff/sign-in)
- [Mengatur Port Context](/terminal-staff/set-port-context)

**[Administrator](/terminal-administrator)** — peran (role), pengguna, dan akses

- [Menambah Role Baru](/terminal-administrator/add-role) ·
  [Mengelola Permission Role](/terminal-administrator/manage-role-permissions) ·
  [Mengubah atau Menghapus Role](/terminal-administrator/edit-delete-role)
- [Menambah Pengguna Baru](/terminal-administrator/add-user) ·
  [Mengaktifkan atau Menonaktifkan Pengguna](/terminal-administrator/activate-deactivate-user) ·
  [Menghapus Pengguna](/terminal-administrator/delete-user)
- [Memberikan Role kepada Pengguna](/terminal-administrator/assign-role) ·
  [Mengelola Permission Langsung Pengguna](/terminal-administrator/manage-user-permissions) ·
  [Memberikan atau Mencabut Role Admin](/terminal-administrator/grant-revoke-admin)

**[Pengaturan Data Master](/terminal-staff/master-data)** — diatur sekali, jarang diubah

- [Operators](/terminal-staff/operators) — data master operator feri
- [Vessels](/terminal-staff/vessels) — kelola Vessel yang digunakan untuk perjalanan
- [Ports](/terminal-staff/ports) — terminal, beserta zona waktunya
- [Gates](/terminal-staff/gates) — Gate Boarding per Port
- [Berths](/terminal-staff/berths) — Berth per Port
- [Routes](/terminal-staff/routes) — Route asal → tujuan
- [Countries](/terminal-staff/countries) — daftar kewarganegaraan, penanda populer, dan
  cakupan hari libur

**[Operator Terminal](/terminal-operator)** — operasional sehari-hari

[Operasional](/terminal-operator/operations) — susun jadwal dan siapkan perjalanan

- [Mengatur Hari Libur Nasional](/terminal-operator/configure-public-holiday) — tanggal libur per negara
- [Membuat Timeslot](/terminal-operator/create-timeslot) — templat jadwal mingguan yang berulang
- [Membuat Perjalanan dari Timeslot](/terminal-operator/generate-trips) — Trip Sync Job
- [Membuat Perjalanan Ad Hoc](/terminal-operator/create-ad-hoc-trip) — pelayaran satu kali
- [Membatalkan dan Memulihkan Perjalanan](/terminal-operator/cancel-restore-trip)
- [Mengatur Perjalanan menjadi Boarding](/terminal-operator/set-trip-as-boarding) — tetapkan Gate & Berth
- [Mengubah Waktu](/terminal-operator/update-timings) — jam Gate & keterlambatan

[Pre-Immigration](/terminal-operator/pre-immigration) — titik pemindaian pertama

- [Memindai Boarding Pass](/terminal-operator/pre-immigration-scan)
- [Membatalkan Pemindaian Pre-Immigration](/terminal-operator/revert-pre-immigration)
- [Menyiapkan Layar Penumpang](/terminal-operator/pre-immigration-display)

[Boarding](/terminal-operator/boarding) — di Gate

- [Memindai Boarding Pass](/terminal-operator/boarding-scan)
- [Membatalkan Pemindaian Boarding](/terminal-operator/revert-boarding)
- [Panggilan Terakhir (Last Call)](/terminal-operator/last-call)
- [Mengatur Perjalanan menjadi Close](/terminal-operator/set-trip-as-close) ·
  [Mengatur Perjalanan menjadi Depart](/terminal-operator/set-trip-as-depart)
- [Menyiapkan Layar Penumpang](/terminal-operator/boarding-display)

[Dukungan Umum](/terminal-operator/general-support) — konter di samping alur utama

- [Mencari Penumpang](/terminal-operator/look-up-passenger) — pencarian read-only di semua perjalanan
- [Check-in Penumpang NTL / LM](/terminal-operator/check-in-ntl-lm)
- [Mengubah Data Penumpang yang Sudah Check-in](/terminal-operator/edit-passenger)
- [Membatalkan Penumpang](/terminal-operator/cancel-passenger) ·
  [Mengubah Status Penumpang](/terminal-operator/update-passenger-status)
- [Mencetak Ulang atau Mengunduh Boarding Pass](/terminal-operator/reprint-boarding-pass)
- [Mengunduh Manifest](/terminal-operator/download-manifest)
- [Mengekspor Laporan Lainnya](/terminal-operator/export-other-reports) — Passenger Manifest, Passenger Summary, Daily Passenger Report

## Panduan Operator Feri {/* #ferry-operator-guides */}

Masuk

- [Masuk ke Operator Portal](/ferry-operator/sign-in)
- [Berpindah Operator](/ferry-operator/switch-operator) — berpindah antar-workspace

[Administrator](/operator-administrator) — peran (role), pengguna, dan akses

- [Menambah Role Baru](/operator-administrator/add-role) ·
  [Mengelola Permission Role](/operator-administrator/manage-role-permissions) ·
  [Mengubah atau Menghapus Role](/operator-administrator/edit-delete-role)
- [Menambah Pengguna Baru](/operator-administrator/add-user) ·
  [Mengaktifkan atau Menonaktifkan Pengguna](/operator-administrator/activate-deactivate-user) ·
  [Menghapus Pengguna](/operator-administrator/delete-user)
- [Memberikan Role kepada Pengguna](/operator-administrator/assign-role) ·
  [Mengelola Permission Langsung Pengguna](/operator-administrator/manage-user-permissions) ·
  [Memberikan atau Mencabut Role Admin](/operator-administrator/grant-revoke-admin)

Mencari informasi (read-only)

- [Mencari Vessel](/ferry-operator/look-up-vessel) — kapasitas dan status aktif
- [Mencari Timeslot](/ferry-operator/look-up-timeslot) — jadwal berulang Anda
- [Mencari Perjalanan](/ferry-operator/look-up-trip) — grid mingguan dan detail perjalanan
- [Mencari Penumpang](/ferry-operator/look-up-passenger) — perjalanan terjadwal yang akan datang

Operasional harian

- [Mengganti Vessel pada Perjalanan](/ferry-operator/change-trip-vessel) — satu perjalanan tertentu atau pilih beberapa perjalanan sekaligus
- [Check-in Penumpang](/ferry-operator/check-in-passenger) — termasuk mengubah dan membatalkan
- [Mencetak Ulang atau Mengunduh Boarding Pass](/ferry-operator/reprint-boarding-pass)

Manifest

- [Mengunduh Manifest](/ferry-operator/download-manifest) — Excel, penumpang berstatus Boarded
- [Mengekspor Laporan Manifest Penumpang](/ferry-operator/export-manifest-report) — PDF/Excel, status apa pun, kata sandi opsional
