-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2022 at 05:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravelandvue`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jsonData` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `featuredImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `metaDescription` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `post`, `post_excerpt`, `jsonData`, `slug`, `user_id`, `featuredImage`, `metaDescription`, `views`, `created_at`, `updated_at`) VALUES
(18, 'Excepteur optio vol', '<p class=\"blog_post_text\">\n                        <b><i>In publishing</i></b> and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.    \n                    </p>undefined<p class=\"blog_post_text\">\n                        <i>This is a dummy functions data</i>    \n                    </p><p class=\"blog_post_text\">\n                        <b><i>In publishing</i></b> and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.    \n                    </p>undefined<p class=\"blog_post_text\">\n                        <i>This is a dummy functions data</i>    \n                    </p><p class=\"blog_post_text\">\n                        <b><i>In publishing</i></b> and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.    \n                    </p>undefined<p class=\"blog_post_text\">\n                        <i>This is a dummy functions data</i>    \n                    </p>', 'Tenetur est non ipsu', '{\"time\":1659069448470,\"blocks\":[{\"id\":\"ZgEnqHnBTz\",\"type\":\"paragraph\",\"data\":{\"text\":\"<b><i>In publishing</i></b> and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.\"}},{\"id\":\"2LSfv841H9\",\"type\":\"code\",\"data\":{\"code\":\"const data = function(a, b){\\n  return a * b\\n}\\n\\nconsole.log(data(1,2))\\n \"}},{\"id\":\"M-k9u1lJu8\",\"type\":\"paragraph\",\"data\":{\"text\":\"<i>This is a dummy functions data</i>\"}}],\"version\":\"2.25.0\"}', 'excepteur-optio-vol', 1, NULL, 'Eu quo placeat itaq', 0, '2022-07-28 22:37:29', '2022-07-28 22:37:29');

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `category_id`, `blog_id`, `created_at`, `updated_at`) VALUES
(37, 99, 18, NULL, NULL),
(38, 101, 18, NULL, NULL),
(39, 102, 18, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE `blog_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_tags`
--

INSERT INTO `blog_tags` (`id`, `tag_id`, `blog_id`, `created_at`, `updated_at`) VALUES
(65, 41, 18, NULL, NULL),
(66, 57, 18, NULL, NULL),
(67, 58, 18, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iconImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `iconImage`, `created_at`, `updated_at`) VALUES
(98, 'Cat one', NULL, '2022-07-21 09:38:28', '2022-07-21 09:38:28'),
(99, 'Cat two', NULL, '2022-07-21 09:38:34', '2022-07-21 09:38:34'),
(100, 'Cat three', NULL, '2022-07-21 09:39:11', '2022-07-21 09:39:11'),
(101, 'Cat four', NULL, '2022-07-21 09:39:45', '2022-07-21 09:39:45'),
(102, 'Cat five', NULL, '2022-07-21 09:39:55', '2022-07-21 09:39:55');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2022_06_06_114944_create_blogs_table', 1),
(10, '2022_06_06_115345_create_categories_table', 1),
(11, '2022_06_06_115410_create_blog_categories_table', 1),
(12, '2022_06_06_115442_create_tags_table', 1),
(13, '2022_06_06_115456_create_blog_tags_table', 1),
(15, '2022_06_27_164128_create_user_roles_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tagName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `tagName`, `created_at`, `updated_at`) VALUES
(40, 'Tag one', '2022-06-23 13:18:53', '2022-06-23 13:18:53'),
(41, 'Tag two', '2022-06-23 13:19:00', '2022-06-23 13:19:00'),
(57, 'Tag 5', '2022-07-12 09:14:22', '2022-07-12 09:14:22'),
(58, 'Tag 6', '2022-07-12 09:16:02', '2022-07-12 09:16:02'),
(59, 'Tag 7', '2022-07-12 09:16:41', '2022-07-12 09:16:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `role_id` int(11) DEFAULT NULL,
  `isActivated` tinyint(1) NOT NULL DEFAULT 0,
  `passwordResetCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activationCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `socialType` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `userType`, `role_id`, `isActivated`, `passwordResetCode`, `activationCode`, `socialType`, `created_at`, `updated_at`) VALUES
(1, 'Bipu Shaha', 'bipu@gmail.com', '$2y$10$szRP8FN3yBO864DRbAEUsOZTxHBi4UP/8kuUpS.bpepThz1PyuIMi', 'Admin', 1, 0, NULL, NULL, NULL, '2022-06-22 01:24:17', '2022-06-23 01:39:26'),
(21, 'Editor', 'ed@g.com', '$2y$10$rwgAUozB12kUNT2.UZyKfukTwD7t83Okg3CUU3U4JSYqFSC22gN62', 'User', 6, 0, NULL, NULL, NULL, '2022-07-03 12:28:31', '2022-07-29 08:16:01');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roleName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` int(11) NOT NULL DEFAULT 0,
  `permission` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `roleName`, `isAdmin`, `permission`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 1, '[{\"rName\":\"Home\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"home\"},{\"rName\":\"Blogs\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"blogs\"},{\"rName\":\"CreateBlog\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"createblog\"},{\"rName\":\"EditBlog\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"edit_blog\"},{\"rName\":\"Categorys\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"categories\"},{\"rName\":\"Tags\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"tags\"},{\"rName\":\"Users\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"users\"},{\"rName\":\"Add New Role\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"addnewrole\"},{\"rName\":\"Role Asign\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"roleasign\"}]', '2022-07-03 07:42:00', '2022-07-26 10:46:33'),
(6, 'Admin', 1, '[{\"rName\":\"Home\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"home\"},{\"rName\":\"Blogs\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"blogs\"},{\"rName\":\"CreateBlog\",\"read\":false,\"write\":false,\"update\":false,\"delete\":false,\"name\":\"createblog\"},{\"rName\":\"EditBlog\",\"read\":false,\"write\":false,\"update\":false,\"delete\":false,\"name\":\"EditBlog\"},{\"rName\":\"Categorys\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"categories\"},{\"rName\":\"Tags\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"tags\"},{\"rName\":\"Users\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"users\"},{\"rName\":\"Add New Role\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"addnewrole\"},{\"rName\":\"Role Asign\",\"read\":true,\"write\":true,\"update\":true,\"delete\":true,\"name\":\"roleasign\"}]', '2022-07-04 04:15:01', '2022-07-29 08:43:41'),
(7, 'Editor', 1, NULL, '2022-07-04 04:15:08', '2022-07-28 22:54:30'),
(8, 'Modarator', 1, NULL, '2022-07-04 04:15:17', '2022-07-04 04:15:17'),
(9, 'User', 0, NULL, '2022-07-04 04:15:25', '2022-07-04 04:15:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `blog_tags`
--
ALTER TABLE `blog_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
