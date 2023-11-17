<?php

/*
  Plugin Name: Nps scale Plugin
  Version: 1.0
  Author: Brad
  Author URI: https://github.com/LearnWebCode
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BradsBoilerplatess {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('makeUpANameHereScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('makeUpANameHereStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    register_block_type('makeupnamespace/make-up-block-name', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'makeUpANameHereScript',
      'editor_style' => 'makeUpANameHereStyle'
    ));
  }
  
   function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }
     
    ob_start(); ?>
    
    <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
  }

  
}
// 


$bradsBoilerplatess = new BradsBoilerplatess();


function get_page_id(){
  
$current_url = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    // get page id from url and check for ssl enabled 
    $pageId = url_to_postid(set_url_scheme($current_url));
// echo 'The current post or page ID is: ' . $pageId;
  
  return $pageId;
  }

  wp_enqueue_script('your-react-script', 'path-to-your-react-script.js', array('wp-element'), null, true);
    
  function enqueue_my_react_script() {
    $my_data = get_page_id(); // Get the data from your function
    wp_localize_script('your-react-script', 'myDataObject', array(
        'data' => $my_data,
    ));
}

add_action('wp_enqueue_scripts', 'enqueue_my_react_script');


