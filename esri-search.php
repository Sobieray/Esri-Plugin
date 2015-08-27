<?php
/**
 * Plugin Name: Esri
 * Plugin URI: http://zayo.com
 * Description: This is a custom plugin that adds Esri Geocoder functionality.
 * Author: Matt Sobieray
 * Author URI: http://hyfyn.com
 * Version: 0.1.0
 */

/* Place custom code below this line. */
// Locater Shortcode
function services_locater($atts) {
  ob_start();
  ?>
  <div id="find-services" class="clearfix">
    <h3>Explore Zayo&rsquo;s Fiber Network</h3>
	<div id="search"></div>
  </div> 
  <?php
  return ob_get_clean();
}
add_shortcode('locater', 'services_locater');

function check_for_shortcode($posts) {
    if ( empty($posts) )
        return $posts;
 
    // false because we have to search through the posts first
    $found = false;
 
    // search through each post
    foreach ($posts as $post) {
        // check the post content for the short code
        if ( stripos($post->post_content, '[locater]') )
            // we have found a post with the short code
            $found = true;
            // stop the search
            break;
        }
 
    if ($found){
        $url = plugin_dir_url( __FILE__ );
        wp_enqueue_style('calro', 'https://js.arcgis.com/3.13/dijit/themes/claro/claro.css', array(), null, false );
        wp_enqueue_style('esri-css', 'https://js.arcgis.com/3.13/esri/css/esri.css', array(), null, false );
        wp_register_script( 'arcgis', 'https://js.arcgis.com/3.14/init.js', array('jquery'), null, false );
        wp_register_script( 'esri-js', $url . 'esri/esri.js', array('jquery'), null, false );

    }
    return $posts;
}
// perform the check when the_posts() function is called
add_action('the_posts', 'check_for_shortcode');
add_action('wp_footer', function() {
    wp_enqueue_script('arcgis');
    wp_enqueue_script('esri-js');
});
?>