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
                    <a href="index.html" data-type="index-link">Gestión de Formaciones de la Fundación Loyola documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-a51657149ee87002f6b549b8b11cefc2e70bbe75af74199aa594c7b43646eb915321f009b4913265171a60dad66291bb75d84f8a9288e430bc8c500dcad746d6"' : 'data-bs-target="#xs-components-links-module-AppModule-a51657149ee87002f6b549b8b11cefc2e70bbe75af74199aa594c7b43646eb915321f009b4913265171a60dad66291bb75d84f8a9288e430bc8c500dcad746d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a51657149ee87002f6b549b8b11cefc2e70bbe75af74199aa594c7b43646eb915321f009b4913265171a60dad66291bb75d84f8a9288e430bc8c500dcad746d6"' :
                                            'id="xs-components-links-module-AppModule-a51657149ee87002f6b549b8b11cefc2e70bbe75af74199aa594c7b43646eb915321f009b4913265171a60dad66291bb75d84f8a9288e430bc8c500dcad746d6"' }>
                                            <li class="link">
                                                <a href="components/AltaCentroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AltaCentroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AsignarUsuariosFormacionModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsignarUsuariosFormacionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearFormacionModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearFormacionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarFormacionModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarFormacionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormacionFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormacionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GoogleSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoCentroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoCentroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoCursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoEducadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoEducadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoFormacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoFormacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscripcionFormacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscripcionFormacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModificarCentroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModificarCentroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoAutorizadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoAutorizadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CentrosService.html" data-type="entity-link" >CentrosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormacionService.html" data-type="entity-link" >FormacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalidadService.html" data-type="entity-link" >LocalidadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvinciaService.html" data-type="entity-link" >ProvinciaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link" >SharedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EducadoresGuard.html" data-type="entity-link" >EducadoresGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FormacionesGuard.html" data-type="entity-link" >FormacionesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ResponsableCentroGuard.html" data-type="entity-link" >ResponsableCentroGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddCentroPayload.html" data-type="entity-link" >AddCentroPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Center.html" data-type="entity-link" >Center</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CentroModificado.html" data-type="entity-link" >CentroModificado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Formacion.html" data-type="entity-link" >Formacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormacionResponse.html" data-type="entity-link" >FormacionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locality.html" data-type="entity-link" >Locality</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModificarCentroPayload.html" data-type="entity-link" >ModificarCentroPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Province.html" data-type="entity-link" >Province</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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