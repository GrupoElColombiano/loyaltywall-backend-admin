'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">admin.back-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccessModulesModule.html" data-type="entity-link" >AccessModulesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' : 'data-bs-target="#xs-controllers-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' :
                                            'id="xs-controllers-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' }>
                                            <li class="link">
                                                <a href="controllers/AccessModulesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessModulesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' : 'data-bs-target="#xs-injectables-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' :
                                        'id="xs-injectables-links-module-AccessModulesModule-8328448b86ec4f6939f1df2506cbefc83b78eed0feb79b3dbd02a28f414dd5d346cb00a4650d6d7e0eacfe390adbb0feac4161df031a9be61090e47a713ad96d"' }>
                                        <li class="link">
                                            <a href="injectables/AccessModulesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessModulesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' :
                                            'id="xs-controllers-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' :
                                        'id="xs-injectables-links-module-AppModule-8cb4687b59cc38f315a21128ed044e0c6fba3e84ffd92974bba82a21e13b59fc3968cb51504571d30654b7b2d16e31f5c013c78de1b50e9a34fa050653b2af67"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' :
                                            'id="xs-controllers-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' :
                                        'id="xs-injectables-links-module-AuthModule-b01b6675ec6199fffb896de0f69e698495d9230e422c16a10d9fc2637f9f11ababbd11228c4d2e5ba9154e7e779468488a2ce223a1717ef1ac4c3c7ca430555c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KeycloakConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeycloakConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' :
                                            'id="xs-controllers-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' :
                                        'id="xs-injectables-links-module-CategoryModule-de4059aee9c492c3a1c5bf8d89a0fb11522263ebfcf1a97c4c55aefc2127450ed6b8555db872e8a0ec21b90456f4a81518f7db5753fe7d70f471a2e052a13d97"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KeycloakModule.html" data-type="entity-link" >KeycloakModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' : 'data-bs-target="#xs-controllers-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' :
                                            'id="xs-controllers-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' }>
                                            <li class="link">
                                                <a href="controllers/KeycloakController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeycloakController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' : 'data-bs-target="#xs-injectables-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' :
                                        'id="xs-injectables-links-module-KeycloakModule-aa6c31e38c491d23069dcfccb4228d8c297ba7c5dd556d7b7ee0135c5493db856f223b8d7e0e8c32f735809ad6efdcc05285a1045a428f6811124a2ebca04d45"' }>
                                        <li class="link">
                                            <a href="injectables/KeycloakService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeycloakService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' : 'data-bs-target="#xs-controllers-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' :
                                            'id="xs-controllers-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' }>
                                            <li class="link">
                                                <a href="controllers/ChangePasswordMailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordMailController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ConfirmCreateUserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmCreateUserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ResetPasswordMailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordMailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' : 'data-bs-target="#xs-injectables-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' :
                                        'id="xs-injectables-links-module-MailModule-032ff824c64b876478184841e4017185208fbbf1f965588e0bca9c4fe1dfce555715c69a9bcce727ea1cf7d88266e93aee1c912f35a66db54455de1926160ecf"' }>
                                        <li class="link">
                                            <a href="injectables/ChangePasswordMailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordMailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfirmCreateUserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmCreateUserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResetPasswordMailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordMailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TwoFactorAuthenticationMailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationMailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlansModule.html" data-type="entity-link" >PlansModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' : 'data-bs-target="#xs-controllers-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' :
                                            'id="xs-controllers-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' }>
                                            <li class="link">
                                                <a href="controllers/PlansController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlansController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' : 'data-bs-target="#xs-injectables-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' :
                                        'id="xs-injectables-links-module-PlansModule-2f06679b9531d6b0a9244da8b1262903571c447b457eb046c873f7b9fba21d2c0f574b55d000c40df59580cd967100cb2dbe6c11ac0c1d107a9e4ed6d8d79673"' }>
                                        <li class="link">
                                            <a href="injectables/PlansService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlansService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' :
                                            'id="xs-controllers-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' :
                                        'id="xs-injectables-links-module-ProductModule-9fce133a2a4be7610085181fcf0797e508b5781fa8fbf86c63e6a70b6eb60bff7d23d3ac7eb5c85bf04b87ff7c867cf22ce1e9e60eff48624bd2b82b5fdc87b2"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' :
                                            'id="xs-controllers-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' :
                                        'id="xs-injectables-links-module-RolesModule-931c8bb15fb311c3dd75c7b8ea069db795c7d927f7b2c94dfe51e6bb2f0b705c5ebed0763895e6bc5ac3eeb3a01eda6bc6c44fff6de60b3b91696f5c75d6af3d"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SitesModule.html" data-type="entity-link" >SitesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' : 'data-bs-target="#xs-controllers-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' :
                                            'id="xs-controllers-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' }>
                                            <li class="link">
                                                <a href="controllers/SitesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' : 'data-bs-target="#xs-injectables-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' :
                                        'id="xs-injectables-links-module-SitesModule-91d0b14478991881483587280b3a9b6f1a70c1295d1c051d7305a75a88595b9f2cc78e8bea55e20ba7350ae8b3376ae285ad8bdba6e90fc5588d6cfdffa2ead7"' }>
                                        <li class="link">
                                            <a href="injectables/SitesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplateManagerModule.html" data-type="entity-link" >TemplateManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' : 'data-bs-target="#xs-controllers-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' :
                                            'id="xs-controllers-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' }>
                                            <li class="link">
                                                <a href="controllers/TemplateManagerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateManagerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' : 'data-bs-target="#xs-injectables-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' :
                                        'id="xs-injectables-links-module-TemplateManagerModule-f159c8d044bfb4b77d55a683758b0acb72c6f531c8c3e2c0862a54bd679e4db1d30a016fb465d12cf369e08d9db9049cc67543ee9c47fd4199240de38cb54e07"' }>
                                        <li class="link">
                                            <a href="injectables/TemplateManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' :
                                            'id="xs-controllers-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' }>
                                            <li class="link">
                                                <a href="controllers/UserProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' :
                                        'id="xs-injectables-links-module-UsersModule-1657ac724f50f71ea1a27fda0bab90a9f334e4a54649a65c22b096104bfecc0b193c716643badfc5e424ae1385ed0fa4378fef152a39f95683b15368eb773890"' }>
                                        <li class="link">
                                            <a href="injectables/UserProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsertypeModule.html" data-type="entity-link" >UsertypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' : 'data-bs-target="#xs-controllers-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' :
                                            'id="xs-controllers-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' }>
                                            <li class="link">
                                                <a href="controllers/UsertypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsertypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' : 'data-bs-target="#xs-injectables-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' :
                                        'id="xs-injectables-links-module-UsertypeModule-76c74a72125ff00de25a8e80dcc0a7973a4bea7f686632b81913c352409da7a6ad11e52c496b076190d0e481885c679059662a3fac9ae485bf7af6bf35c1e84a"' }>
                                        <li class="link">
                                            <a href="injectables/UsertypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsertypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccessModulesController.html" data-type="entity-link" >AccessModulesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChangePasswordMailController.html" data-type="entity-link" >ChangePasswordMailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ConfirmCreateUserController.html" data-type="entity-link" >ConfirmCreateUserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KeycloakController.html" data-type="entity-link" >KeycloakController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlansController.html" data-type="entity-link" >PlansController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResetPasswordMailController.html" data-type="entity-link" >ResetPasswordMailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SitesController.html" data-type="entity-link" >SitesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TemplateManagerController.html" data-type="entity-link" >TemplateManagerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserProfileController.html" data-type="entity-link" >UserProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsertypeController.html" data-type="entity-link" >UsertypeController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ChangePasswordEntity.html" data-type="entity-link" >ChangePasswordEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PaywallModule.html" data-type="entity-link" >PaywallModule</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PaywallModuleAction.html" data-type="entity-link" >PaywallModuleAction</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PaywallModuleActionRelation.html" data-type="entity-link" >PaywallModuleActionRelation</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Plan.html" data-type="entity-link" >Plan</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PlansProductCategory.html" data-type="entity-link" >PlansProductCategory</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ResetPasswordEntity.html" data-type="entity-link" >ResetPasswordEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RolePaywallModule.html" data-type="entity-link" >RolePaywallModule</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RolePaywallModuleActionRelation.html" data-type="entity-link" >RolePaywallModuleActionRelation</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Site.html" data-type="entity-link" >Site</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserAdminEntity.html" data-type="entity-link" >UserAdminEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserType.html" data-type="entity-link" >UserType</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApiException.html" data-type="entity-link" >ApiException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSiteDto.html" data-type="entity-link" >CreateSiteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserAdminDto.html" data-type="entity-link" >CreateUserAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlanDto.html" data-type="entity-link" >PlanDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691181176026.html" data-type="entity-link" >SetDb1691181176026</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691184456498.html" data-type="entity-link" >SetDb1691184456498</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691184574917.html" data-type="entity-link" >SetDb1691184574917</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691186525496.html" data-type="entity-link" >SetDb1691186525496</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691512677390.html" data-type="entity-link" >SetDb1691512677390</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691515083659.html" data-type="entity-link" >SetDb1691515083659</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDb1691708514379.html" data-type="entity-link" >SetDb1691708514379</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDbPaywalmodule1692297610787.html" data-type="entity-link" >SetDbPaywalmodule1692297610787</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDbPaywalmodule1692380137673.html" data-type="entity-link" >SetDbPaywalmodule1692380137673</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNewPlansFields1692380743605.html" data-type="entity-link" >SetNewPlansFields1692380743605</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNewPlansFields1692815139944.html" data-type="entity-link" >SetNewPlansFields1692815139944</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNewPlansFields1692822538207.html" data-type="entity-link" >SetNewPlansFields1692822538207</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNewPlansFields1692824385127.html" data-type="entity-link" >SetNewPlansFields1692824385127</a>
                            </li>
                            <li class="link">
                                <a href="classes/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePlanDto.html" data-type="entity-link" >UpdatePlanDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSiteDto.html" data-type="entity-link" >UpdateSiteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPasswordDto.html" data-type="entity-link" >UpdateUserPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTypeDto.html" data-type="entity-link" >UserTypeDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccessModulesService.html" data-type="entity-link" >AccessModulesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangePasswordMailService.html" data-type="entity-link" >ChangePasswordMailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmCreateUserService.html" data-type="entity-link" >ConfirmCreateUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KeycloakConfigService.html" data-type="entity-link" >KeycloakConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KeycloakService.html" data-type="entity-link" >KeycloakService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlansService.html" data-type="entity-link" >PlansService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResetPasswordMailService.html" data-type="entity-link" >ResetPasswordMailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SitesService.html" data-type="entity-link" >SitesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateManagerService.html" data-type="entity-link" >TemplateManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TwoFactorAuthenticationMailService.html" data-type="entity-link" >TwoFactorAuthenticationMailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileService.html" data-type="entity-link" >UserProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsertypeService.html" data-type="entity-link" >UsertypeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});