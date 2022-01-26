export default {
  common: {
    yes: 'yes',
    no: 'no',
    wrong: 'Something went wrong',
    none: 'None',
  },
  action: {
    upload: 'Upload',
    back: 'Back',
    backToLogin: 'Back to login',
    signUp: 'Sign up',
    signIn: 'Sign in',
    createNew: 'Create new',
    create: 'Create',
    edit: 'Edit',
    change: 'Change',
    delete: 'Delete',
    rename: 'Rename',
    add: 'Add',
    makeChoice: 'Make a choice',
    cancel: 'Cancel',
    save: 'Save',
    retry: 'Retry',
    search: 'Search',
    copy: 'Copy',
    activate: 'Activate',
    deactivate: 'Deactivate',
  },
  adminType: {
    settings: 'Settings',
  },
  applicationType: {
    database: 'Database',
    cantSelectTableTitle: "Couldn't select the database.",
    cantSelectTableDescription:
      "The database couldn't be selected because it doesn't have any tables. Use the" +
      ' sidebar to create one.',
  },
  settingType: {
    account: 'Account',
    password: 'Password',
    tokens: 'API Tokens',
  },
  userFileUploadType: {
    file: 'my device',
    url: 'a URL',
  },
  field: {
    emailAddress: 'E-mail address',
  },
  error: {
    invalidEmail: 'Please enter a valid e-mail address.',
    notMatchingPassword: 'This field must match your password field.',
    minLength: 'A minimum of {min} characters is required here.',
    maxLength: 'A maximum of {max} characters is allowed here.',
    minMaxLength:
      'A minimum of {min} and a maximum of {max} characters is allowed here.',
    requiredField: 'This field is required.',
  },
  permission: {
    admin: 'Admin',
    adminDescription: 'Can fully configure and edit groups and applications.',
    member: 'Member',
    memberDescription: 'Can fully configure and edit applications.',
  },
  fieldType: {
    singleLineText: 'Single line text',
    longText: 'Long text',
    linkToTable: 'Link to table',
    number: 'Number',
    rating: 'Rating',
    boolean: 'Boolean',
    date: 'Date',
    lastModified: 'Last modified',
    createdOn: 'Created on',
    url: 'URL',
    email: 'Email',
    file: 'File',
    singleSelect: 'Single select',
    multipleSelect: 'Multiple select',
    phoneNumber: 'Phone number',
    formula: 'Formula',
    lookup: 'Lookup',
  },
  fieldErrors: {
    invalidNumber: 'Invalid number',
    maxDigits: 'Max {max} digits allowed.',
    invalidUrl: 'Invalid URL',
    max254Chars: 'Max 254 chars',
    invalidEmail: 'Invalid email',
    invalidPhoneNumber: 'Invalid Phone Number',
  },
  fieldDocs: {
    readOnly: 'This is a read only field.',
    text: 'Accepts single line text.',
    longText: 'Accepts multi line text.',
    linkRow:
      'Accepts an array containing the identifiers of the related rows from table' +
      ' id {table}. All identifiers must be provided every time the relations are' +
      ' updated. If an empty array is provided all relations will be deleted.',
    number: 'Accepts a number.',
    numberPositive: 'Accepts a positive number.',
    decimal: 'Accepts a decimal with {places} decimal places after the dot.',
    decimalPositive:
      'Accepts a positive decimal with {places} decimal places after the dot.',
    rating: 'Accepts a number.',
    boolean: 'Accepts a boolean.',
    date: 'Accepts a date time in ISO format.',
    dateTime: 'Accepts a date in ISO format.',
    dateResponse: 'The response will be a datetime in ISO format.',
    dateTimeResponse: 'The response will be a date in ISO format.',
    lastModifiedReadOnly: 'The last modified field is a read only field.',
    createdOnReadOnly: 'The created on field is a read only field.',
    url: 'Accepts a string that must be a URL.',
    email: 'Accepts a string that must be an email address.',
    file: 'Accepts an array of objects containing at least the name of the user file.',
    singleSelect:
      'Accepts an integer representing the chosen select option id or null if none' +
      ' is selected.',
    multipleSelect:
      'Accepts an array of integers each representing the chosen select option id.',
    phoneNumber:
      'Accepts a phone number which has a maximum length of 100 characters' +
      ' consisting solely of digits, spaces and the following characters: ' +
      'Nx,._+*()#=;/- .',
    formula:
      'A read-only field defined by a formula written in the Baserow formula' +
      ' language.',
    lookup:
      'A read-only field connected to a link row field which returns an array of' +
      ' values and row ids from the chosen lookup field in the linked table.',
  },
  viewFilter: {
    contains: 'contains',
    containsNot: 'contains not',
    filenameContains: 'filename contains',
    has: 'has',
    hasNot: 'has not',
    higherThan: 'higher than',
    is: 'is',
    isNot: 'is not',
    isEmpty: 'is empty',
    isNotEmpty: 'is not empty',
    isDate: 'is date',
    isDayOfMonth: 'day of month is',
    isBeforeDate: 'is before date',
    isAfterDate: 'is after date',
    isNotDate: 'is not date',
    isToday: 'is today',
    inThisMonth: 'in this month',
    inThisYear: 'in this year',
    lowerThan: 'lower than',
    lengthIsLowerThan: 'length is lower than',
    hasFileType: 'has file type',
  },
  viewType: {
    grid: 'Grid',
    gallery: 'Gallery',
    form: 'Form',
    sharing: {
      linkName: 'view',
      formLinkName: 'form',
    },
  },
  premium: {
    deactivated: 'Available in premium version',
  },
  trashType: {
    group: 'group',
    application: 'application',
    table: 'table',
    field: 'field',
    row: 'row',
  },
  webhook: {
    request: 'Request',
    response: 'Response',
    successfullyUpdated: 'Webhook successfully updated.',
    status: {
      noStatus: 'NO STATUS',
      statusOK: 'OK',
      statusNotOK: 'NOT OK',
    },
    eventType: {
      rowCreated: 'When a row is created',
      rowUpdated: 'When a row is updated',
      rowDeleted: 'When a row is deleted',
    },
  },
  clientHandler: {
    notFoundTitle: '{name} not found.',
    notFoundDescription:
      "The selected {name} wasn't found, maybe it has already been deleted.",
    networkErrorTitle: 'Network error',
    networkErrorDescription: 'Could not connect to the API server.',
    tooManyRequestsTitle: 'Too many requests',
    tooManyRequestsDescription:
      'You are sending too many requests to the server. Please wait a moment.',
    notCompletedTitle: 'Action not completed.',
    notCompletedDescription:
      "The action couldn't be completed because an unknown error has occured.",
    userNotInGroupTitle: 'Action not allowed.',
    userNotInGroupDescription:
      "The action couldn't be completed because you aren't a member of the related group.",
    invalidGroupPermissionsTitle: 'Action not allowed.',
    invalidGroupPermissionsDescription:
      "The action couldn't be completed because you don't have the right permissions to the related group.",
    tableDoesNotExistTitle: "Table doesn't exist.",
    tableDoesNotExistDescription:
      "The action couldn't be completed because the related table doesn't exist anymore.",
    rowDoesNotExistTitle: "Row doesn't exist.",
    rowDoesNotExistDescription:
      "The action couldn't be completed because the related row doesn't exist anymore.",
    fileSizeTooLargeTitle: 'File to large',
    fileSizeTooLargeDescription: 'The provided file is too large.',
    invalidFileTitle: 'Invalid file',
    invalidFileDescription: 'The provided file is not a valid file.',
    fileUrlCouldNotBeReachedTitle: 'Invalid URL',
    fileUrlCouldNotBeReachedDescription:
      'The provided file URL could not be reached.',
    invalidFileUrlTitle: 'Invalid URL',
    invalidFileUrlDescription:
      'The provided file URL is invalid or not allowed.',
    adminCannotDeactivateSelfTitle: 'Action not allowed.',
    adminCannotDeactivateSelfDescription:
      'You cannot de-activate or un-staff yourself.',
    adminCannotDeleteSelfTitle: 'Action not allowed.',
    adminCannotDeleteSelfDescription: 'You cannot delete yourself.',
    maxFieldCountExceededTitle: "Couldn't create field.",
    maxFieldCountExceededDescription:
      "The action couldn't be completed because the field count exceeds the limit",
    cannotRestoreParentBeforeChildTitle: 'Please restore the parent first.',
    cannotRestoreParentBeforeChildDescription:
      'You cannot restore this item because it depends on a deleted item. Please restore the parent item first.',
    cannotRestoreAsRelatedTableTrashedTitle:
      'Please restore the related tables first.',
    cannotRestoreAsRelatedTableTrashedDescription:
      'You cannot restore this field because it depends on other tables which are' +
      ' still trashed. Please' +
      ' restore the other related tables first.',
    groupUserIsLastAdminTitle: "Can't leave the group",
    groupUserIsLastAdminDescription:
      "It's not possible to leave the group because you're the last admin. Please delete the group or give another user admin permissions.",
  },
  importerType: {
    csv: 'Import a CSV file',
    paste: 'Paste table data',
    xml: 'Import an XML file',
    json: 'Import a JSON file',
  },
  apiDocs: {
    intro: 'Introduction',
    authent: 'Authentication',
    table: '{name} table',
    filters: 'Filters',
    errors: 'HTTP Errors',
    fields: 'Fields',
    listFields: 'List fields',
    listRows: 'List rows',
    getRow: 'Get row',
    createRow: 'Create row',
    updateRow: 'Update row',
    moveRow: 'Move row',
    deleteRow: 'Delete row',
    queryParameters: 'Query parameters',
    pathParameters: 'Path parameters',
    requestBodySchema: 'Request body schema',
    userFieldNamesDescription:
      'When any value is provided for the `user_field_names` GET param then field names returned by this endpoint will be the actual names of the fields.\n\n If the `user_field_names` GET param is not provided, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.',
  },
  exporterType: {
    csv: 'Export to CSV',
  },
  previewType: {
    imageBrowser: 'Open in browser',
    videoBrowser: 'Open in browser',
    AudioBrowser: 'Open in browser',
    pdfBrowser: 'Open in browser',
    googleDocs: 'Open with Google Docs',
  },
  humanDateFormat: {
    'dd/mm/yyyy': 'dd/mm/yyyy',
    'mm/dd/yyyy': 'mm/dd/yyyy',
    'yyyy-mm-dd': 'yyyy-mm-dd',
  },
  formulaFunctions: {
    upperDescription: 'Returns its argument in upper case.',
    lowerDescription: 'Returns its argument in lower case.',
    concatDescription:
      'Returns its arguments joined together as a single piece of text.',
    addDescription: 'Returns its two arguments added together.',
    minusDescription: 'Returns its two arguments subtracted.',
    multiplyDescription: 'Returns its two arguments multiplied together.',
    divideDescription:
      'Returns its two arguments divided, the first divided by the second.',
    equalDescription: 'Returns if its two arguments have the same value.',
    ifDescription:
      'If the first argument is true then returns the second argument, otherwise returns the third.',
    toTextDescription: 'Converts the input to text.',
    datetimeFormatDescription:
      'Converts the date to text given a way of formatting the date.',
    toNumberDescription: 'Converts the input to a number if possible.',
    fieldDescription: 'Returns the field named by the single text argument.',
    lookupDescription:
      'Looks up the values from a field in another table for rows in a link row' +
      ' field. The first argument should be the name of a link row field in the' +
      ' current table and the second should be the name of a field in the linked' +
      ' table.',
    isBlankDescription:
      'Returns true if the argument is empty or blank, false otherwise.',
    tDescription:
      "Returns the arguments value if it is text, but otherwise ''.",
    notDescription:
      'Returns false if the argument is true and true if the argument is false.',
    greaterThanDescription:
      'Returns true if the first argument greater than the second, otherwise false.',
    greaterThanOrEqualDescription:
      'Returns true if the first argument is greater than or equal to the second, otherwise false.',
    lessThanDescription:
      'Returns true if the first argument less than the second, otherwise false.',
    lessThanOrEqualDescription:
      'Returns true if the first argument less than or equal to the second, otherwise false.',
    toDateDescription:
      'Returns the first argument converted into a date given a date format string as the second argument.',
    dayDescription:
      'Returns the day of the month as a number between 1 to 31 from the argument.',
    dateDiffDescription:
      "Given a date unit to measure in as the first argument ('year', " +
      "'month', 'week', 'day', 'hour', 'minute', 'seconds') calculates and returns " +
      'the number of units from the second argument to the third.',
    andDescription:
      'Returns the logical and of the first and second argument, so if they are both' +
      'true then the result is true, otherwise it is false.',
    orDescription:
      'Returns the logical or of the first and second argument, so if either are ' +
      'true then the result is true, otherwise it is false.',
    dateIntervalDescription:
      'Returns the date interval corresponding to the provided argument.',
    replaceDescription:
      'Replaces all instances of the second argument in the first argument with ' +
      'the third argument.',
    searchDescription:
      'Returns a positive integer starting from 1 for the first ' +
      'occurrence of the second argument inside the first, or 0 if no ' +
      'occurrence is found.',
    rowIdDescription: 'Returns the rows unique identifying number.',
    lengthDescription:
      'Returns the number of characters in the first argument provided.',
    reverseDescription:
      'Returns the reversed text of the provided first argument.',
    notEqualDescription: 'Returns if its two arguments have different values.',
    countDescription: 'Returns the number of items in its first argument.',
    containsDescription:
      'Returns true if the first piece of text contains at least once the second.',
    leftDescription:
      'Extracts the left most characters from the first input, stops when it has' +
      ' extracted the number of characters specified by the second input.',
    rightDescription:
      'Extracts the right most characters from the first input, stops when it has' +
      ' extracted the number of characters specified by the second input.',
    trimDescription:
      'Removes all whitespace from the left and right sides of the input.',
    regexReplaceDescription:
      'Replaces any text in the first input which matches the regex specified by' +
      ' the second input with the text in the third input.',
    greatestDescription: 'Returns the greatest value of the two inputs.',
    leastDescription: 'Returns the smallest of the two inputs.',
    monthDescription: 'Returns the number of months in the provided date.',
    yearDescription: 'Returns the number of years in the provided date.',
    secondDescription: 'Returns the number of seconds in the provided date.',
    whenEmptyDescription:
      'If the first input is calculated to be empty the ' +
      'second input will be returned instead, otherwise if the first input is not' +
      ' empty the first will be returned.',
    anyDescription:
      'Returns true if any one of the provided looked up values is true,' +
      ' false if they are all false.',
    everyDescription:
      'Returns true if every one of the provided looked up values is true,' +
      ' false otherwise.',
    maxDescription:
      'Returns the largest number from all the looked up values provided.',
    minDescription:
      'Returns the smallest number from all the looked up values provided.',
    joinDescription:
      'Concats all of the values from the first input together using the values' +
      ' from the second input.',
    stddevPopDescription:
      'Calculates the population standard deviation of the values and returns the' +
      ' result. ' +
      'The population standard deviation should be used when the provided values' +
      ' contain a ' +
      ' value for every single piece of data in the population.',
    stddevSampleDescription:
      'Calculates the sample standard deviation of the values and returns the' +
      ' result. ' +
      'The sample deviation should be used when the provided values are only for a' +
      ' sample or subset  of values for an underlying population.',
    varianceSampleDescription:
      'Calculates the sample variance of the values and returns the result. ' +
      'The sample variance should be used when the provided values are only for a' +
      ' sample or subset of values for an underlying population.',
    variancePopDescription:
      'Calculates the population variance of the values and returns the result. ' +
      'The population variance should be used when the provided values contain a ' +
      ' value for every single piece of data in the population.',
    avgDescription: 'Averages all of the values and returns the result.',
    sumDescription: 'Sums all of the values and returns the result.',
    filterDescription:
      'Filters down an expression involving a lookup/link field reference or a' +
      ' lookup function call.',
  },
  functionnalGridViewFieldLinkRow: {
    unnamed: 'unnamed row {value}',
  },
}
