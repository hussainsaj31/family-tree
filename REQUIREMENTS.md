# Family Tree Application Requirements Document

---

## 1.0 Core Features

---

### 1.1 User Authentication
* The application must support two primary sign-in methods for all users:
    * **Google Sign-In:** One-tap sign-in using a Google account.
    * **Custom Email/Password:** A standard registration and login flow with email and password, including password reset functionality.
* Upon successful login, a user profile is created and stored in the backend. This profile should include, at a minimum, the user ID, email, and a list of tree IDs they own or have access to.

### 1.2 Family Tree Management
* Each user can create and manage their own family tree.
* A user is designated as the **owner** of any tree they create.
* Users must be able to add new members to the tree, including their name, relationship to other members, and an optional email address, optional date of birth (only year also is allowed ), from which age can be calculated, deceased , (no need to show age for deceased).
* Users must be able to edit and delete existing members from their tree.

### 1.3 Sharing and Collaboration
* When adding a new person to the tree, the **owner** can optionally include their email address.
* The application must have a mechanism to send an email invite to the provided email address. The email should contain a unique link that, when clicked, directs the invited user to a login/registration page, and upon successful sign-in, grants them read-only access to the specific tree.
* Invited users must be able to create an account and access a read-only version of the shared tree.

### 1.4 Admin Functionality
* The application must have a designated **admin** role.
* There must be a separate, secure admin page accessible only to users with the **admin** role.
* The admin page must provide a dashboard to view a list of all users and their associated family tree details.
* Admins can view all user and tree data, but cannot edit user-owned trees. The dashboard should display key metadata for each tree, such as the owner's name, creation date, and the number of members in the tree.
* Should be also able to block access to tree.

### 1.5 User Roles and Permissions
This application defines three primary user roles with distinct access levels:
* **Owner:** This is the user who created the family tree. The Owner has full read/write access to their tree, including the ability to edit the tree's structure and content, add/edit/delete members, and send invitations.
* **Viewer:** An invited user who has read-only access to a specific family tree. Viewers can see the tree's content but cannot make any modifications.
* **Admin:** A privileged user role with a secure dashboard. Admins can view all user data and tree details for the purpose of management and support, but they cannot edit or modify user-owned family trees.

---

## 2.0 Technical Stack

---

* **Frontend:** The application will be built using **Flutter** and **Dart** to support both web and mobile platforms from a single codebase.
* **Backend:** **Firebase** will be used for all backend services, including:
    * **Authentication:** For managing user sign-in methods.
    * **Firestore:** For storing user data, family tree structures, and admin information.
    * **Cloud Functions:** For handling server-side logic, such as sending email invitations.
    * **Firebase Storage:** For storing user-uploaded assets like profile photos (as part of the suggested features).

---

## 3.0 Suggested Additional Features

---

### 3.1 Visualization Enhancements
* **Interactive Tree Diagrams:** Implement a dynamic and interactive tree view that allows users to zoom, pan, and navigate the tree visually.
* **Photo Uploads:** Allow users to upload and associate profile pictures with each person in their family tree.(optional)

### 3.2 Sharing and Collaboration
* **View-Only Shares:** Generate unique, shareable links that provide read-only access to a specific family tree. These links should have an optional expiration date.
* **Multi-owner Option:** The tree **owner** should have the ability to grant editing privileges to other registered users, creating a co-editor or co-owner role.
* **Export/Import:** Enable the import of trees from and export of trees to the standard **GEDCOM** format.

### 3.3 Privacy and Security
* **Granular Permissions:** Allow the tree **owner** to set specific privacy settings, such as hiding details of living relatives from viewers.
* **Activity Logs:** Implement a log that tracks all edits made to a family tree, recording who made the change and what was changed.

### 3.4 User Experience Polish
* **Search:** Add a search bar to quickly find relatives within a large family tree by name or other details.
* **Notifications:** Implement in-app and/or email notifications to alert users about new invites, edits to a shared tree, or new members joining.

### 3.5 Admin and Analytics
* **User Management:** Give admins the ability to manage user accounts, including the ability to temporarily suspend or permanently ban users.
* **Basic Stats:** The admin dashboard should display key metrics like the number of active users and the average size of family trees.

### 3.6 Monetization/Public Scaling
* **Premium Features:** Introduce premium tiers that offer advanced features such as an unlimited number of trees, advanced export options, or an ad-free experience.
* **Social Integration:** Allow users to share a simplified, visual preview of their family tree on social media.
* **Public Directory:** Provide an opt-in feature where users can choose to make their tree discoverable to other users for collaborative purposes.

---

## Development Phases

### Phase 1: Core MVP
- [ ] User authentication (email/password)
- [ ] Basic family tree creation and management
- [ ] Simple tree visualization
- [ ] User profiles and tree ownership

### Phase 2: Collaboration Features
- [ ] Google Sign-In integration
- [ ] Email invitations and sharing
- [ ] Read-only access for invited users
- [ ] Basic admin dashboard

### Phase 3: Enhanced Features
- [ ] Interactive tree diagrams
- [ ] Photo uploads
- [ ] Search functionality
- [ ] Export/Import capabilities

### Phase 4: Advanced Features
- [ ] Premium features
- [ ] Social integration
- [ ] Advanced admin tools
- [ ] Analytics and reporting