// Import the defineField function from your project's utility functions or Sanity's part system if applicable.
// This comment serves as a placeholder for the actual import statement, which depends on your project setup.

// Define a new field for use in your Sanity schemas that utilizes the Google Translate API for translations.
export default defineField({
    name: 'localizedGoogleTranslateString', // Unique identifier for the field within your schema
    title: 'Localized String', // Human-readable name for the field, shown in the Sanity Studio
    type: 'localizedString', // Specifies that this field is of the custom type 'localizedString' defined elsewhere
    options: {
      translate: true, // Enable translation features for this field
      apiKey: process.env.SANITY_STUDIO_GOOGLE_TRANSLATE_API_KEY, // Google Translate API key, stored in environment variables for security
    },
  });
  
  // Note: Ensure that you have defined a 'localizedString' type in your project,
  // and that you have set the SANITY_STUDIO_GOOGLE_TRANSLATE_API_KEY environment variable in your Sanity Studio's configuration.
  