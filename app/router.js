import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('autenticado',{ path : '/tom4te' }, function() {
    this.route('admin', function() {
      this.route('dashboard',{ path : '/' });
    });
    this.route('dashboard',{ path : '/' }, function() {
      this.route('custom');
    });
    this.route('feed',{ path : '/feed' }, function() {
      this.route('configuracao');
      this.route('lista',{ path : '/' });
    });
    this.route('post', function() {
      this.route('novo');
      this.route('editar');
      this.route('visualizar',{ path : '/' });
    });
    this.route('perfil', function() {
      this.route('usuario');
      this.route('editar');
      this.route('visualizar',{ path : '/' });
    });
  });

  this.route('desautenticado');

  this.route('paginas',{ path : '/' }, function() {
    this.route('home',{ path : '/' });
    this.route('about');
  });

});

export default Router;
