import Foundation

@objc public enum MomentumIconsType: Int, CaseIterable {
    // swiftlint:disable:next identifier_name
    case _invalid

    // unhandledCase will be handled by the default case below
    // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
    // We need at least one unhandled case to avoid the warning: "Default will never be executed"
    case unhandledCase

    case accessibilityBold
    case accessibilityLight
    case accessibilityRegular
    case accessoriesBold
    case accessoriesFilled
    case accessoriesLight
    case accessoriesRegular
    case accordianBold
    case accordianLight
    case accordianRegular
    case activePresenceSmallFilled
    case activeSpeakerAlertBold
    case activeSpeakerAlertLight
    case activeSpeakerAlertRegular
    case activeSpeakerBold
    case activeSpeakerLight
    case activeSpeakerLockBold
    case activeSpeakerLockLight
    case activeSpeakerLockRegular
    case activeSpeakerRegular
    case addOptionBold
    case addOptionLight
    case addOptionRegular
    case addPhotoBold
    case addPhotoLight
    case addPhotoRegular
    case addPollBold
    case addPollLight
    case addPollRegular
    case addQuestionBold
    case addQuestionLight
    case addQuestionRegular
    case addVideoMarkerBold
    case addVideoMarkerLight
    case addVideoMarkerRegular
    case adjustAudioBold
    case adjustAudioLight
    case adjustAudioRegular
    case adjustBold
    case adjustLight
    case adjustMicrophoneBold
    case adjustMicrophoneLight
    case adjustMicrophoneRegular
    case adjustRegular
    case adjustVideoBold
    case adjustVideoLight
    case adjustVideoRegular
    case adminBold
    case adminFilled
    case adminLight
    case adminRegular
    case advanceScheduleBold
    case advanceScheduleLight
    case advanceScheduleRegular
    case advancedNoiseRemovalBold
    case advancedNoiseRemovalLight
    case advancedNoiseRemovalRegular
    case agentUniqueCodeBold
    case agentUniqueCodeLight
    case agentUniqueCodeRegular
    case airplayBold
    case airplayLight
    case airplayRegular
    case alarmBold
    case alarmFilled
    case alarmLight
    case alarmRegular
    case alertActiveBold
    case alertActiveFilled
    case alertActiveLight
    case alertActiveRegular
    case alertBold
    case alertFilled
    case alertLight
    case alertMutedBold
    case alertMutedFilled
    case alertMutedLight
    case alertMutedRegular
    case alertRegular
    case alignBottomBold
    case alignBottomFilled
    case alignBottomLight
    case alignBottomRegular
    case alignHorizontalCenterBold
    case alignHorizontalCenterFilled
    case alignHorizontalCenterLight
    case alignHorizontalCenterRegular
    case alignLeftBold
    case alignLeftFilled
    case alignLeftLight
    case alignLeftRegular
    case alignRightBold
    case alignRightFilled
    case alignRightLight
    case alignRightRegular
    case alignTopBold
    case alignTopFilled
    case alignTopLight
    case alignTopRegular
    case alignVerticalCenterBold
    case alignVerticalCenterFilled
    case alignVerticalCenterLight
    case alignVerticalCenterRegular
    case allowToAnnotateBold
    case allowToAnnotateLight
    case allowToAnnotateRegular
    case alphalinkColored
    case alternateResponseBold
    case alternateResponseLight
    case alternateResponseRegular
    case analogHeadsetBold
    case analogHeadsetLight
    case analogHeadsetRegular
    case analysisBold
    case analysisFilled
    case analysisLight
    case analysisRegular
    case annotateBold
    case annotateFilled
    case annotateLight
    case annotateRegular
    case announcementBold
    case announcementFilled
    case announcementLight
    case announcementMutedBold
    case announcementMutedFilled
    case announcementMutedLight
    case announcementMutedRegular
    case announcementRegular
    case appPushBold
    case appPushLight
    case appPushRegular
    case appearanceBold
    case appearanceLight
    case appearanceRegular
    case applauseBold
    case applauseLight
    case applauseRegular
    case appleBold
    case appleBusinessChatColored
    case appleFilled
    case appleLight
    case appleRegular
    case applicationBold
    case applicationLight
    case applicationPanelBold
    case applicationPanelLight
    case applicationPanelRegular
    case applicationRegular
    case applicationsBold
    case applicationsFilled
    case applicationsLight
    case applicationsRegular
    case approvalPendingBold
    case approvalPendingLight
    case approvalPendingRegular
    case approvalsBold
    case approvalsLight
    case approvalsRegular
    case appsBold
    case appsFilled
    case appsLight
    case appsRegular
    case archiveBold
    case archiveLight
    case archiveRegular
    case areaChartBold
    case areaChartFilled
    case areaChartLight
    case areaChartRegular
    case areaSelectorBold
    case areaSelectorLight
    case areaSelectorRegular
    case arrowCircleDownBold
    case arrowCircleDownFilled
    case arrowCircleDownLight
    case arrowCircleDownRegular
    case arrowCircleLeftBold
    case arrowCircleLeftFilled
    case arrowCircleLeftLight
    case arrowCircleLeftRegular
    case arrowCircleRightBold
    case arrowCircleRightFilled
    case arrowCircleRightLight
    case arrowCircleRightRegular
    case arrowCircleUpBold
    case arrowCircleUpFilled
    case arrowCircleUpLight
    case arrowCircleUpRegular
    case arrowDownBold
    case arrowDownFilled
    case arrowDownLight
    case arrowDownRegular
    case arrowLeftBold
    case arrowLeftFilled
    case arrowLeftLight
    case arrowLeftRegular
    case arrowRightBold
    case arrowRightFilled
    case arrowRightLight
    case arrowRightRegular
    case arrowTailDownBold
    case arrowTailDownLight
    case arrowTailDownRegular
    case arrowTailUpBold
    case arrowTailUpLight
    case arrowTailUpRegular
    case arrowUpBold
    case arrowUpFilled
    case arrowUpLight
    case arrowUpRegular
    case askForHelpBold
    case askForHelpFilled
    case askForHelpLight
    case askForHelpRegular
    case assetsBold
    case assetsFilled
    case assetsLight
    case assetsRegular
    case assignHostBold
    case assignHostLight
    case assignHostRegular
    case assignPrivilegeBold
    case assignPrivilegeFilled
    case assignPrivilegeLight
    case assignPrivilegeRegular
    case attachmentBold
    case attachmentLight
    case attachmentRegular
    case attendantConsoleBold
    case attendantConsoleFilled
    case attendantConsoleLight
    case attendantConsoleRegular
    case audioBroadcastBold
    case audioBroadcastLight
    case audioBroadcastRegular
    case audioCallBold
    case audioCallFilled
    case audioCallLight
    case audioCallRegular
    case audioEnhancementBold
    case audioEnhancementFilled
    case audioEnhancementLight
    case audioEnhancementRegular
    case audioOnlyBold
    case audioOnlyLight
    case audioOnlyRegular
    case audioOptAllBold
    case audioOptAllLight
    case audioOptAllRegular
    case audioOptionsBold
    case audioOptionsFilled
    case audioOptionsLight
    case audioOptionsRegular
    case autoDetectionBold
    case autoDetectionLight
    case autoDetectionRegular
    case automationBold
    case automationLight
    case automationRegular
    case awayCallingPresenceBold
    case awayCallingPresenceFilled
    case awayCallingPresenceLight
    case awayCallingPresenceRegular
    case backBold
    case backLight
    case backRegular
    case backToFullScreenBold
    case backToFullScreenLight
    case backToFullScreenRegular
    case backToTopBold
    case backToTopLight
    case backToTopRegular
    case backlightBold
    case backlightLight
    case backlightRegular
    case backspaceBold
    case backspaceLight
    case backspaceRegular
    case backupDataBold
    case backupDataLight
    case backupDataRegular
    case barcodeBold
    case barcodeLight
    case barcodeRegular
    case batteryChargingBold
    case batteryChargingLight
    case batteryChargingRegular
    case batteryEmptyBold
    case batteryEmptyLight
    case batteryEmptyRegular
    case batteryHighBold
    case batteryHighLight
    case batteryHighRegular
    case batteryLowBold
    case batteryLowLight
    case batteryLowRegular
    case batteryMediumBold
    case batteryMediumLight
    case batteryMediumRegular
    case bitmojiConnectBold
    case bitmojiConnectLight
    case bitmojiConnectRegular
    case bitmojiConnectedBold
    case bitmojiConnectedFilled
    case bitmojiConnectedLight
    case bitmojiConnectedRegular
    case blindTransferBold
    case blindTransferLight
    case blindTransferRegular
    case blockQuoteBold
    case blockQuoteLight
    case blockQuoteRegular
    case blockedBold
    case blockedLight
    case blockedRegular
    case bluetoothBold
    case bluetoothFilled
    case bluetoothLight
    case bluetoothMutedBold
    case bluetoothMutedLight
    case bluetoothMutedRegular
    case bluetoothRegular
    case boldBold
    case boldFilled
    case boldLight
    case boldRegular
    case bookmarkBold
    case bookmarkLight
    case bookmarkRegular
    case botBold
    case botCustomerAssistantBold
    case botCustomerAssistantLight
    case botCustomerAssistantRegular
    case botExpertAssistantBold
    case botExpertAssistantLight
    case botExpertAssistantRegular
    case botLight
    case botRegular
    case boxBold
    case boxLight
    case boxRegular
    case breakoutSessionBold
    case breakoutSessionFilled
    case breakoutSessionLight
    case breakoutSessionRegular
    case brightnessBold
    case brightnessHighBold
    case brightnessHighLight
    case brightnessHighRegular
    case brightnessLight
    case brightnessRegular
    case brokenFileBold
    case brokenFileFilled
    case brokenFileLight
    case brokenFileRegular
    case browserBold
    case browserLight
    case browserRegular
    case busyPresenceBold
    case busyPresenceLight
    case busyPresenceRegular
    case buttonCursorBold
    case buttonCursorLight
    case buttonCursorRegular
    case calendarAddBold
    case calendarAddFilled
    case calendarAddLight
    case calendarAddRegular
    case calendarDayBold
    case calendarDayFilled
    case calendarDayLight
    case calendarDayRegular
    case calendarEmptyBold
    case calendarEmptyFilled
    case calendarEmptyLight
    case calendarEmptyRegular
    case calendarExternalBold
    case calendarExternalLight
    case calendarExternalRegular
    case calendarFilterBold
    case calendarFilterLight
    case calendarFilterRegular
    case calendarMonthBold
    case calendarMonthFilled
    case calendarMonthLight
    case calendarMonthMoreBold
    case calendarMonthMoreLight
    case calendarMonthMoreRegular
    case calendarMonthRegular
    case calendarTodayBold
    case calendarTodayLight
    case calendarTodayRegular
    case calendarWeekBold
    case calendarWeekFilled
    case calendarWeekLight
    case calendarWeekRegular
    case calendarWeekViewBold
    case calendarWeekViewFilled
    case calendarWeekViewLight
    case calendarWeekViewRegular
    case calendarWorkWeekBold
    case calendarWorkWeekFilled
    case calendarWorkWeekLight
    case calendarWorkWeekRegular
    case callBargeBold
    case callBargeFilled
    case callBargeLight
    case callBargeRegular
    case callBargeSilentBold
    case callBargeSilentLight
    case callBargeSilentRegular
    case callForwardSettingsBold
    case callForwardSettingsFilled
    case callForwardSettingsLight
    case callForwardSettingsRegular
    case callGroupPickupBold
    case callGroupPickupFilled
    case callGroupPickupLight
    case callGroupPickupRegular
    case callHandlingBold
    case callHandlingLight
    case callHandlingRegular
    case callHoldBold
    case callHoldFilled
    case callHoldLight
    case callHoldRegular
    case callIncomingBold
    case callIncomingLight
    case callIncomingRegular
    case callListBold
    case callListLight
    case callListRegular
    case callMergeBold
    case callMergeLight
    case callMergeRegular
    case callMissedBold
    case callMissedFilled
    case callMissedLight
    case callMissedRegular
    case callMoreBold
    case callMoreLight
    case callMoreRegular
    case callOutgoingBold
    case callOutgoingLight
    case callOutgoingRegular
    case callPickupBold
    case callPickupFilled
    case callPickupLight
    case callPickupOtherBold
    case callPickupOtherFilled
    case callPickupOtherLight
    case callPickupOtherRegular
    case callPickupRegular
    case callPrivateBold
    case callPrivateFilled
    case callPrivateLight
    case callPrivateRegular
    case callRemoteBold
    case callRemoteFilled
    case callRemoteLight
    case callRemoteRegular
    case callRequestBold
    case callRequestFilled
    case callRequestLight
    case callRequestRegular
    case callReturnBold
    case callReturnFilled
    case callReturnLight
    case callReturnRegular
    case callRoomBold
    case callRoomLight
    case callRoomRegular
    case callSettingsBold
    case callSettingsLight
    case callSettingsRegular
    case callSplitBold
    case callSplitLight
    case callSplitRegular
    case callSwapBold
    case callSwapLight
    case callSwapRegular
    case callVoicemailBold
    case callVoicemailLight
    case callVoicemailRegular
    case callrateBold
    case callrateLight
    case callrateRegular
    case cameraAuxBold
    case cameraAuxFilled
    case cameraAuxLight
    case cameraAuxRegular
    case cameraBold
    case cameraFilled
    case cameraLight
    case cameraMutedBold
    case cameraMutedCircleFilled
    case cameraMutedFilled
    case cameraMutedLight
    case cameraMutedRegular
    case cameraOnBold
    case cameraOnFilled
    case cameraOnLight
    case cameraOnRegular
    case cameraPhotoBold
    case cameraPhotoFilled
    case cameraPhotoLight
    case cameraPhotoRegular
    case cameraPresenceBold
    case cameraPresenceFilled
    case cameraPresenceLight
    case cameraPresenceRegular
    case cameraRegular
    case cameraSwapBold
    case cameraSwapLight
    case cameraSwapRegular
    case campaignManagementBold
    case campaignManagementLight
    case campaignManagementRegular
    case cancelBold
    case cancelLight
    case cancelRegular
    case capsLockBold
    case capsLockLight
    case capsLockRegular
    case captureRewindBold
    case captureRewindLight
    case captureRewindRegular
    case caroselBold
    case caroselLight
    case caroselRegular
    case carouselTextBold
    case carouselTextLight
    case carouselTextRegular
    case cellularBold
    case cellularLight
    case cellularRegular
    case centerAlignedBold
    case centerAlignedLight
    case centerAlignedRegular
    case centerBold
    case centerLight
    case centerRegular
    case certificateBold
    case certificateInvalidBold
    case certificateInvalidLight
    case certificateInvalidRegular
    case certificateLight
    case certificateRegular
    case certifiedBold
    case certifiedLight
    case certifiedRegular
    case chPSearchBold
    case chPSearchLight
    case chPSearchRegular
    case channelUssdBold
    case channelUssdLight
    case channelUssdRegular
    case chatBold
    case chatFilled
    case chatGroupBold
    case chatGroupFilled
    case chatGroupLight
    case chatGroupRegular
    case chatLight
    case chatMuteBold
    case chatMuteLight
    case chatMuteRegular
    case chatRegular
    case checkBold
    case checkCircleBadgeFilled
    case checkCircleBold
    case checkCircleFilled
    case checkCircleLight
    case checkCircleRegular
    case checkLight
    case checkRegular
    case checkboxGroupBold
    case checkboxGroupLight
    case checkboxGroupRegular
    case ciscoAiAssistantDefault
    case ciscoAiAssistantInactive
    case ciscoAiAssistantSolidBold
    case cleanUpBold
    case cleanUpLight
    case cleanUpRegular
    case clearBadgeFilled
    case clearBold
    case clearFilled
    case clearLight
    case clearRegular
    case closeSpaceBold
    case closeSpaceLight
    case closeSpaceRegular
    case closedCaptionBadgeBold
    case closedCaptionBadgeFilled
    case closedCaptionBadgeLight
    case closedCaptionBadgeRegular
    case closedCaptionsBold
    case closedCaptionsFilled
    case closedCaptionsLight
    case closedCaptionsRegular
    case cloudBold
    case cloudDownloadBold
    case cloudDownloadLight
    case cloudDownloadRegular
    case cloudFilled
    case cloudFrameBold
    case cloudFrameFilled
    case cloudFrameLight
    case cloudFrameRegular
    case cloudLight
    case cloudMutedBold
    case cloudMutedFilled
    case cloudMutedLight
    case cloudMutedRegular
    case cloudRegular
    case cloudUploadBold
    case cloudUploadLight
    case cloudUploadRegular
    case codeBlockBold
    case codeBlockLight
    case codeBlockRegular
    case coffeeBold
    case coffeeLight
    case coffeeRegular
    case colorBold
    case colorFilled
    case colorLight
    case colorRegular
    case colourPaletteBold
    case colourPaletteFilled
    case colourPaletteLight
    case colourPaletteRegular
    case commentingBold
    case commentingFilled
    case commentingLight
    case commentingRegular
    case companyBold
    case companyLight
    case companyRegular
    case completedByBaseBold
    case completedByBaseLight
    case completedByBaseRegular
    case completedByTimeBold
    case completedByTimeLight
    case completedByTimeRegular
    case computerBold
    case computerLight
    case computerRegular
    case conciergeBold
    case conciergeLight
    case conciergeRegular
    case conditionalBlockBold
    case conditionalBlockLight
    case conditionalBlockRegular
    case connectBold
    case connectLight
    case connectRegular
    case contactCardBold
    case contactCardFilled
    case contactCardLight
    case contactCardRegular
    case contactsBold
    case contactsFilled
    case contactsLight
    case contactsRegular
    case contentDownloadBold
    case contentDownloadFilled
    case contentDownloadLight
    case contentDownloadRegular
    case contentShareBold
    case contentShareLight
    case contentShareRegular
    case contrastBold
    case contrastLight
    case contrastRegular
    case copyBold
    case copyLight
    case copyRegular
    case cpuBold
    case cpuLight
    case cpuRegular
    case createAGroupBold
    case createAGroupFilled
    case createAGroupLight
    case createAGroupRegular
    case cropBold
    case cropLight
    case cropRegular
    case cucmConnectionBold
    case cucmConnectionLight
    case cucmConnectionRegular
    case customCodeEditorBold
    case customCodeEditorLight
    case customCodeEditorRegular
    case dailyRecurringScheduleBold
    case dailyRecurringScheduleLight
    case dailyRecurringScheduleRegular
    case dashboardBold
    case dashboardFilled
    case dashboardLight
    case dashboardRegular
    case dataManagementBold
    case dataManagementFilled
    case dataManagementLight
    case dataManagementRegular
    case dataRangeSelectionBold
    case dataRangeSelectionFilled
    case dataRangeSelectionLight
    case dataRangeSelectionRegular
    case declineBold
    case declineFilled
    case declineLight
    case declineRegular
    case deleteBold
    case deleteFilled
    case deleteLight
    case deleteRegular
    case deploymentEvaluationProgressBold
    case deploymentEvaluationProgressLight
    case deploymentEvaluationProgressRegular
    case deploymentProgressBold
    case deploymentProgressLight
    case deploymentProgressRegular
    case deploymentRecurringBold
    case deploymentRecurringLight
    case deploymentRecurringRegular
    case deploymentWinnerPendingBold
    case deploymentWinnerPendingLight
    case deploymentWinnerPendingRegular
    case deskPhoneBold
    case deskPhoneFilled
    case deskPhoneLight
    case deskPhoneRegular
    case deskPhoneWarningBold
    case deskPhoneWarningLight
    case deskPhoneWarningRegular
    case deviceConnectionBold
    case deviceConnectionFilled
    case deviceConnectionLight
    case deviceConnectionRegular
    case deviceInRoomBold
    case deviceInRoomEndBold
    case deviceInRoomEndLight
    case deviceInRoomEndRegular
    case deviceInRoomFilled
    case deviceInRoomLight
    case deviceInRoomRegular
    case deviceMutedBold
    case deviceMutedLight
    case deviceMutedRegular
    case devicePolicyControllerBold
    case devicePolicyControllerLight
    case devicePolicyControllerRegular
    case diagnosticsBold
    case diagnosticsLight
    case diagnosticsRegular
    case dialpadBold
    case dialpadLight
    case dialpadRegular
    case directionalPadBold
    case directionalPadFilled
    case directionalPadLight
    case directionalPadRegular
    case directoryBold
    case directoryLight
    case directoryRegular
    case disappearingPenBold
    case disappearingPenLight
    case disappearingPenRegular
    case discBold
    case discConnectedBold
    case discConnectedLight
    case discConnectedRegular
    case discLight
    case discRegular
    case disconnectBold
    case disconnectFilled
    case disconnectLight
    case disconnectRegular
    case dislikeBold
    case dislikeFilled
    case dislikeLight
    case dislikeRegular
    case displayBold
    case displayInputBold
    case displayInputLight
    case displayInputRegular
    case displayLight
    case displayRegular
    case displayWarningBold
    case displayWarningLight
    case displayWarningRegular
    case distributeHorizontalBold
    case distributeHorizontalFilled
    case distributeHorizontalLight
    case distributeHorizontalRegular
    case distributeVerticallyBold
    case distributeVerticallyFilled
    case distributeVerticallyLight
    case distributeVerticallyRegular
    case dndPresenceBadgeFilled
    case dndPresenceBold
    case dndPresenceFilled
    case dndPresenceLight
    case dndPresenceRegular
    case documentBold
    case documentCameraBold
    case documentCameraDisconnectedBold
    case documentCameraDisconnectedLight
    case documentCameraDisconnectedRegular
    case documentCameraLight
    case documentCameraRegular
    case documentCreateBold
    case documentCreateFilled
    case documentCreateLight
    case documentCreateRegular
    case documentFilled
    case documentLight
    case documentMoveBold
    case documentMoveFilled
    case documentMoveLight
    case documentMoveRegular
    case documentRegular
    case documentShareBold
    case documentShareFilled
    case documentShareLight
    case documentShareRegular
    case doneAllBold
    case doneAllLight
    case doneAllRegular
    case donutChartBold
    case donutChartFilled
    case donutChartLight
    case donutChartRegular
    case downloadBold
    case downloadFilled
    case downloadLight
    case downloadRegular
    case draftBold
    case draftFilled
    case draftIndicatorBold
    case draftIndicatorSmallFilled
    case draftLight
    case draftRegular
    case dragBold
    case dragLight
    case dragRegular
    case draggerHorizontalBold
    case draggerHorizontalLight
    case draggerHorizontalRegular
    case draggerVerticalBold
    case draggerVerticalLight
    case draggerVerticalRegular
    case driveModeBold
    case driveModeLight
    case driveModeRegular
    case dropdownBold
    case dropdownLight
    case dropdownRegular
    case dxEightyBold
    case dxEightyFilled
    case dxEightyLight
    case dxEightyRegular
    case dxSeventyBold
    case dxSeventyLight
    case dxSeventyRegular
    case editBold
    case editFilled
    case editLight
    case editRegular
    case editablePartialBold
    case editablePartialLight
    case editablePartialRegular
    case educationBold
    case educationFilled
    case educationLight
    case educationRegular
    case emailBold
    case emailDeliveredBold
    case emailDeliveredLight
    case emailDeliveredRegular
    case emailFailureBold
    case emailFailureLight
    case emailFailureRegular
    case emailFilled
    case emailInviteBold
    case emailInviteLight
    case emailInviteRegular
    case emailLight
    case emailOutgoingBold
    case emailOutgoingFilled
    case emailOutgoingLight
    case emailOutgoingRegular
    case emailReadBold
    case emailReadFilled
    case emailReadLight
    case emailReadRegular
    case emailRegular
    case emojiExcitedBold
    case emojiExcitedFilled
    case emojiExcitedLight
    case emojiExcitedRegular
    case emojiHappyBold
    case emojiHappyFilled
    case emojiHappyLight
    case emojiHappyRegular
    case emojiPassiveBold
    case emojiPassiveFilled
    case emojiPassiveLight
    case emojiPassiveRegular
    case emojiSadBold
    case emojiSadFilled
    case emojiSadLight
    case emojiSadRegular
    case emojiUnhappyBold
    case emojiUnhappyFilled
    case emojiUnhappyLight
    case emojiUnhappyRegular
    case encryptionCircleFilled
    case encryptionFilled
    case endRemoteDesktopControlBold
    case endRemoteDesktopControlLight
    case endRemoteDesktopControlRegular
    case endToEndEncryptionCircleFilled
    case endToEndEncryptionFilled
    case endpointBlockedBold
    case endpointBlockedLight
    case endpointBlockedRegular
    case endpointBold
    case endpointGTwoBold
    case endpointGTwoLight
    case endpointGTwoRegular
    case endpointGTwoSeventyBold
    case endpointGTwoSeventyDualBold
    case endpointGTwoSeventyDualLight
    case endpointGTwoSeventyDualRegular
    case endpointGTwoSeventyLight
    case endpointGTwoSeventyRegular
    case endpointGTwoStandBold
    case endpointGTwoStandLight
    case endpointGTwoStandRegular
    case endpointLight
    case endpointMxEightHundredBold
    case endpointMxEightHundredDualBold
    case endpointMxEightHundredDualLight
    case endpointMxEightHundredDualRegular
    case endpointMxEightHundredLight
    case endpointMxEightHundredRegular
    case endpointRegular
    case endpointStandBold
    case endpointStandFilled
    case endpointStandLight
    case endpointStandRegular
    case endpointWarningBold
    case endpointWarningLight
    case endpointWarningRegular
    case enterBold
    case enterLight
    case enterRegular
    case enterRoomBold
    case enterRoomFilled
    case enterRoomLight
    case enterRoomRegular
    case eraserBold
    case eraserFilled
    case eraserLight
    case eraserRegular
    case errorLegacyBadgeFilled
    case errorLegacyBold
    case errorLegacyFilled
    case errorLegacyLight
    case errorLegacyRegular
    case ethernetBold
    case ethernetFilled
    case ethernetLight
    case ethernetRegular
    case exchangeBold
    case exchangeLight
    case exchangeRegular
    case exclamationBold
    case exclamationLight
    case exclamationRegular
    case excludeBold
    case excludeLight
    case excludeRegular
    case existingTargetGroupBold
    case existingTargetGroupLight
    case existingTargetGroupRegular
    case exitRoomBold
    case exitRoomLight
    case exitRoomRegular
    case exploreBold
    case exploreLight
    case exploreRegular
    case exportBold
    case exportLight
    case exportRegular
    case extensionMobilityBold
    case extensionMobilityLight
    case extensionMobilityRegular
    case externalMessageBold
    case externalMessageLight
    case externalMessageRegular
    case externalUserBold
    case externalUserLight
    case externalUserRegular
    case familyFontBold
    case familyFontLight
    case familyFontRegular
    case fastForwardBold
    case fastForwardLight
    case fastForwardRegular
    case favoriteBold
    case favoriteFilled
    case favoriteLight
    case favoriteRegular
    case favoritesBold
    case favoritesFilled
    case favoritesLight
    case favoritesRegular
    case fbwBold
    case fbwFilled
    case fbwLight
    case fbwRegular
    case ffwBold
    case ffwFilled
    case ffwLight
    case ffwRegular
    case fileAnalysisBold
    case fileAnalysisFilled
    case fileAnalysisLight
    case fileAnalysisRegular
    case fileAnnotationBold
    case fileAnnotationFilled
    case fileAnnotationLight
    case fileAnnotationRegular
    case fileAudioBold
    case fileAudioFilled
    case fileAudioLight
    case fileAudioRegular
    case fileBugBold
    case fileBugFilled
    case fileBugLight
    case fileBugRegular
    case fileCodeBold
    case fileCodeFilled
    case fileCodeLight
    case fileCodeRegular
    case fileDashboardBold
    case fileDashboardFilled
    case fileDashboardLight
    case fileDashboardRegular
    case fileExcelBold
    case fileExcelFilled
    case fileExcelLight
    case fileExcelRegular
    case fileGraphBold
    case fileGraphFilled
    case fileGraphLight
    case fileGraphRegular
    case fileImageBold
    case fileImageFilled
    case fileImageLight
    case fileImageNoneBold
    case fileImageNoneLight
    case fileImageNoneRegular
    case fileImageRegular
    case fileKeynoteBold
    case fileKeynoteFilled
    case fileKeynoteLight
    case fileKeynoteRegular
    case fileLockedBold
    case fileLockedFilled
    case fileLockedLight
    case fileLockedRegular
    case fileMissingBold
    case fileMissingFilled
    case fileMissingLight
    case fileMissingRegular
    case fileMusicBold
    case fileMusicFilled
    case fileMusicLight
    case fileMusicRegular
    case fileOnenoteBold
    case fileOnenoteFilled
    case fileOnenoteLight
    case fileOnenoteRegular
    case filePdfBold
    case filePdfFilled
    case filePdfLight
    case filePdfRegular
    case filePowerpointBold
    case filePowerpointFilled
    case filePowerpointLight
    case filePowerpointRegular
    case fileSpreadsheetBold
    case fileSpreadsheetFilled
    case fileSpreadsheetLight
    case fileSpreadsheetRegular
    case fileTextBold
    case fileTextFilled
    case fileTextLight
    case fileTextRegular
    case fileThreeDBold
    case fileThreeDFilled
    case fileThreeDLight
    case fileThreeDRegular
    case fileVectorBold
    case fileVectorFilled
    case fileVectorLight
    case fileVectorRegular
    case fileVideoBold
    case fileVideoFilled
    case fileVideoLight
    case fileVideoRegular
    case fileWordBold
    case fileWordFilled
    case fileWordLight
    case fileWordRegular
    case fileZipBold
    case fileZipFilled
    case fileZipLight
    case fileZipRegular
    case filesBold
    case filesFilled
    case filesLight
    case filesRegular
    case fillColourBold
    case fillColourFilled
    case fillColourLight
    case fillColourRegular
    case filterBold
    case filterCircleBold
    case filterCircleFilled
    case filterCircleLight
    case filterCircleRegular
    case filterLight
    case filterRegular
    case fitToWidthBold
    case fitToWidthLight
    case fitToWidthRegular
    case fitToWindowExpandBold
    case fitToWindowExpandLight
    case fitToWindowExpandRegular
    case fitToWindowShrinkBold
    case fitToWindowShrinkLight
    case fitToWindowShrinkRegular
    case flagBold
    case flagCircleBold
    case flagCircleFilled
    case flagCircleLight
    case flagCircleRegular
    case flagFilled
    case flagLight
    case flagRegular
    case folderBold
    case folderEditBold
    case folderEditLight
    case folderEditRegular
    case folderLight
    case folderLockBold
    case folderLockLight
    case folderLockRegular
    case folderRegular
    case folderViewBold
    case folderViewLight
    case folderViewRegular
    case followUpBold
    case followUpLight
    case followUpRegular
    case foodBold
    case foodLight
    case foodRegular
    case formatBold
    case formatDefaultAppBold
    case formatDefaultAppFilled
    case formatDefaultAppLight
    case formatDefaultAppRegular
    case formatLight
    case formatPanelControlBarBold
    case formatPanelControlBarLight
    case formatPanelControlBarRegular
    case formatPanelControlDownBold
    case formatPanelControlDownLight
    case formatPanelControlDownRegular
    case formatPanelControlLeftBold
    case formatPanelControlLeftLight
    case formatPanelControlLeftRegular
    case formatPanelControlRightBold
    case formatPanelControlRightLight
    case formatPanelControlRightRegular
    case formatPanelControlUpBold
    case formatPanelControlUpDownBold
    case formatPanelControlUpDownLight
    case formatPanelControlUpDownRegular
    case formatPanelControlUpLight
    case formatPanelControlUpRegular
    case formatRegular
    case formatViewMixedBold
    case formatViewMixedLight
    case formatViewMixedRegular
    case forwardMessageBold
    case forwardMessageFilled
    case forwardMessageLight
    case forwardMessageRegular
    case forwardTenSecBold
    case forwardTenSecLight
    case forwardTenSecRegular
    case fourColumnBold
    case fourColumnLight
    case fourColumnRegular
    case fourWayNavigationBold
    case fourWayNavigationLight
    case fourWayNavigationRegular
    case frequencyCappingBold
    case frequencyCappingLight
    case frequencyCappingRegular
    case fulfillmentBold
    case fulfillmentLight
    case fulfillmentRegular
    case fullscreenBold
    case fullscreenExitBold
    case fullscreenExitLight
    case fullscreenExitRegular
    case fullscreenLight
    case fullscreenRegular
    case genericDeviceVideoBadgeFilled
    case genericDeviceVideoBold
    case genericDeviceVideoFilled
    case genericDeviceVideoLight
    case genericDeviceVideoRegular
    case gifBold
    case gifFilled
    case gifHorizontalBold
    case gifHorizontalFilled
    case gifHorizontalLight
    case gifHorizontalRegular
    case gifLight
    case gifRegular
    case giftBold
    case giftFilled
    case giftLight
    case giftRegular
    case googleMeetColored
    case greenLeafBold
    case greenLeafFilled
    case greenLeafLight
    case greenLeafRegular
    case greenRoomBold
    case greenRoomFilled
    case greenRoomLight
    case greenRoomRegular
    case guestIssuerBold
    case guestIssuerLight
    case guestIssuerRegular
    case guideBold
    case guideLight
    case guideRegular
    case handPointerBold
    case handPointerLight
    case handPointerRegular
    case handlerBold
    case handlerHorizontalBold
    case handlerHorizontalLight
    case handlerHorizontalRegular
    case handlerLight
    case handlerRegular
    case handsetAlertBold
    case handsetAlertFilled
    case handsetAlertLight
    case handsetAlertRegular
    case handsetBold
    case handsetFilled
    case handsetLight
    case handsetMutedBold
    case handsetMutedFilled
    case handsetMutedLight
    case handsetMutedRegular
    case handsetRegular
    case handshakeBold
    case handshakeLight
    case handshakeRegular
    case headingOneBold
    case headingOneLight
    case headingOneRegular
    case headingThreeBold
    case headingThreeLight
    case headingThreeRegular
    case headingTwoBold
    case headingTwoLight
    case headingTwoRegular
    case headphonesBold
    case headphonesFilled
    case headphonesLight
    case headphonesMutedBold
    case headphonesMutedFilled
    case headphonesMutedLight
    case headphonesMutedRegular
    case headphonesRegular
    case headsetAlertBold
    case headsetAlertLight
    case headsetAlertRegular
    case headsetBold
    case headsetFilled
    case headsetLight
    case headsetMutedBold
    case headsetMutedLight
    case headsetMutedRegular
    case headsetPrivateBold
    case headsetPrivateLight
    case headsetPrivateRegular
    case headsetRegular
    case hearingBold
    case hearingImpairedBold
    case hearingImpairedLight
    case hearingImpairedRegular
    case hearingLight
    case hearingRegular
    case helpBold
    case helpCircleBold
    case helpCircleFilled
    case helpCircleLight
    case helpCircleRegular
    case helpLight
    case helpRegular
    case helpdeskBold
    case helpdeskFilled
    case helpdeskLight
    case helpdeskRegular
    case hideBold
    case hideFilled
    case hideLight
    case hideRegular
    case homeBold
    case homeFilled
    case homeLight
    case homeRegular
    case horizontalLineBold
    case horizontalLineLight
    case horizontalLineRegular
    case hotelingBold
    case hotelingFilled
    case hotelingLight
    case hotelingRegular
    case humidityBold
    case humidityLight
    case humidityRegular
    case huntGroupBold
    case huntGroupFilled
    case huntGroupLight
    case huntGroupRegular
    case idleBold
    case idleFilled
    case idleLight
    case idleRegular
    case immediateBold
    case immediateFilled
    case immediateLight
    case immediateRegular
    case importBold
    case importLight
    case importRegular
    case inCommonBold
    case inCommonLight
    case inCommonRegular
    case includeBold
    case includeLight
    case includeRegular
    case incognitoBold
    case incognitoFilled
    case incognitoLight
    case incognitoRegular
    case incomingCallLegacyBold
    case incomingCallLegacyFilled
    case incomingCallLegacyLight
    case incomingCallLegacyRegular
    case indentDecreaseBold
    case indentDecreaseLight
    case indentDecreaseRegular
    case indentIncreaseBold
    case indentIncreaseLight
    case indentIncreaseRegular
    case infoBadgeFilled
    case infoCircleBold
    case infoCircleFilled
    case infoCircleLight
    case infoCircleRegular
    case infoCircleTwoBold
    case infoCircleTwoFilled
    case infoCircleTwoLight
    case infoCircleTwoRegular
    case inputBold
    case inputDisconnectedBold
    case inputDisconnectedLight
    case inputDisconnectedRegular
    case inputLight
    case inputRegular
    case instantScheduleBold
    case instantScheduleFilled
    case instantScheduleLight
    case instantScheduleRegular
    case integrationsBold
    case integrationsLight
    case integrationsRegular
    case intelligentRoutingBold
    case intelligentRoutingLight
    case intelligentRoutingRegular
    case invitedUserBold
    case invitedUserLight
    case invitedUserRegular
    case italicBold
    case italicFilled
    case italicLight
    case italicRegular
    case joinAudioBold
    case joinAudioFilled
    case joinAudioLight
    case joinAudioRegular
    case keepInTouchBold
    case keepInTouchFilled
    case keepInTouchLight
    case keepInTouchRegular
    case keyboardBold
    case keyboardCloseBold
    case keyboardCloseLight
    case keyboardCloseRegular
    case keyboardLight
    case keyboardRegular
    case languageBold
    case languageFilled
    case languageLight
    case languageRegular
    case laptopBold
    case laptopDisconnectedBold
    case laptopDisconnectedLight
    case laptopDisconnectedRegular
    case laptopFilled
    case laptopLight
    case laptopRegular
    case laserPointerBold
    case laserPointerLight
    case laserPointerRegular
    case launchBold
    case launchLight
    case launchRegular
    case layoutSideBySideVerticalBold
    case layoutSideBySideVerticalFilled
    case layoutSideBySideVerticalLight
    case layoutSideBySideVerticalRegular
    case leaveBreakoutSessionBold
    case leaveBreakoutSessionLight
    case leaveBreakoutSessionRegular
    case leaveDeviceBold
    case leaveDeviceLight
    case leaveDeviceRegular
    case likeBold
    case likeFilled
    case likeLight
    case likeRegular
    case linkBold
    case linkLight
    case linkRegular
    case listBulletedBold
    case listBulletedLight
    case listBulletedRegular
    case listMenuBold
    case listMenuLight
    case listMenuRegular
    case listNumberedBold
    case listNumberedLight
    case listNumberedRegular
    case liveBold
    case liveFilled
    case liveLight
    case liveRegular
    case locationBold
    case locationFilled
    case locationLight
    case locationRegular
    case longTextBoxBold
    case longTextBoxLight
    case longTextBoxRegular
    case lowerHandBold
    case lowerHandLight
    case lowerHandRegular
    case magicPenBold
    case magicPenFilled
    case magicPenLight
    case magicPenRegular
    case markAsUnreadBold
    case markAsUnreadLight
    case markAsUnreadRegular
    case markdownBold
    case markdownLight
    case markdownRegular
    case markerBold
    case markerFilled
    case markerLight
    case markerRegular
    case maximizeBold
    case maximizeLight
    case maximizeRegular
    case mediaPlayerBold
    case mediaPlayerLight
    case mediaPlayerRegular
    case mediaQualityGoodBold
    case mediaQualityGoodFilled
    case mediaQualityGoodLight
    case mediaQualityGoodRegular
    case mediaQualityPoorBold
    case mediaQualityPoorFilled
    case mediaQualityPoorLight
    case mediaQualityPoorRegular
    case mediaQualityUnstableBold
    case mediaQualityUnstableFilled
    case mediaQualityUnstableLight
    case mediaQualityUnstableRegular
    case meetBold
    case meetEndBold
    case meetEndLight
    case meetEndRegular
    case meetFilled
    case meetLight
    case meetRegular
    case meetingSummaryBold
    case meetingSummaryFilled
    case meetingSummaryLight
    case meetingSummaryRegular
    case meetingsBold
    case meetingsFilled
    case meetingsFocusMonthBold
    case meetingsFocusMonthLight
    case meetingsFocusMonthRegular
    case meetingsFocusOneDayBold
    case meetingsFocusOneDayLight
    case meetingsFocusOneDayRegular
    case meetingsFocusThreeDayBold
    case meetingsFocusThreeDayLight
    case meetingsFocusThreeDayRegular
    case meetingsFocusUpcomingBold
    case meetingsFocusUpcomingLight
    case meetingsFocusUpcomingRegular
    case meetingsLight
    case meetingsPresenceBadgeFilled
    case meetingsPresenceBold
    case meetingsPresenceFilled
    case meetingsPresenceLight
    case meetingsPresenceRegular
    case meetingsRegular
    case meetingsTeamBold
    case meetingsTeamFilled
    case meetingsTeamLight
    case meetingsTeamNewBold
    case meetingsTeamNewLight
    case meetingsTeamNewRegular
    case meetingsTeamRegular
    case mentionBold
    case mentionLight
    case mentionRegular
    case messageQueingBold
    case messageQueingLight
    case messageQueingRegular
    case microphoneBold
    case microphoneFilled
    case microphoneHardMutedBold
    case microphoneHardMutedCircleFilled
    case microphoneHardMutedLight
    case microphoneHardMutedRegular
    case microphoneLight
    case microphoneMusicModeBold
    case microphoneMusicModeLight
    case microphoneMusicModeOnBold
    case microphoneMusicModeOnLight
    case microphoneMusicModeOnRegular
    case microphoneMusicModeRegular
    case microphoneMutedBold
    case microphoneMutedCircleFilled
    case microphoneMutedFilled
    case microphoneMutedLight
    case microphoneMutedRegular
    case microphoneOnBold
    case microphoneOnLight
    case microphoneOnRegular
    case microphoneOptAllBold
    case microphoneOptAllLight
    case microphoneOptAllMutedBold
    case microphoneOptAllMutedLight
    case microphoneOptAllMutedRegular
    case microphoneOptAllOnBold
    case microphoneOptAllOnLight
    case microphoneOptAllOnRegular
    case microphoneOptAllRegular
    case microphoneOptMeBold
    case microphoneOptMeLight
    case microphoneOptMeMutedBold
    case microphoneOptMeMutedLight
    case microphoneOptMeMutedRegular
    case microphoneOptMeOnBold
    case microphoneOptMeOnLight
    case microphoneOptMeOnRegular
    case microphoneOptMeRegular
    case microphoneRegular
    case mindMapBold
    case mindMapLight
    case mindMapRegular
    case minimizeBold
    case minimizeLight
    case minimizeRegular
    case minusBold
    case minusLight
    case minusRegular
    case mirrorBold
    case mirrorFilled
    case mirrorLight
    case mirrorRegular
    case mmsFilled
    case moderatorBold
    case moderatorLight
    case moderatorRegular
    case monitoringBold
    case monitoringLight
    case monitoringRegular
    case monthlyRecurringScheduleNodeBold
    case monthlyRecurringScheduleNodeLight
    case monthlyRecurringScheduleNodeRegular
    case moreAdrBold
    case moreAdrLight
    case moreAdrRegular
    case moreBold
    case moreCircleBold
    case moreCircleFilled
    case moreCircleLight
    case moreCircleRegular
    case moreLight
    case moreRegular
    case mouseCursorBold
    case mouseCursorLight
    case mouseCursorRegular
    case moveCallInAdrBold
    case moveCallInAdrLight
    case moveCallInAdrRegular
    case moveCallInIphBold
    case moveCallInIphLight
    case moveCallInIphRegular
    case moveCallInLaptopBold
    case moveCallInLaptopLight
    case moveCallInLaptopRegular
    case moveCallInOutAdrBold
    case moveCallInOutAdrLight
    case moveCallInOutAdrRegular
    case moveCallInOutIphBold
    case moveCallInOutIphLight
    case moveCallInOutIphRegular
    case moveCallInTabletBold
    case moveCallInTabletLight
    case moveCallInTabletRegular
    case moveCallOutAdrBold
    case moveCallOutAdrLight
    case moveCallOutAdrRegular
    case moveCallOutIphBold
    case moveCallOutIphLight
    case moveCallOutIphRegular
    case moveCallOutLaptopBold
    case moveCallOutLaptopLight
    case moveCallOutLaptopRegular
    case moveCallOutTabletBold
    case moveCallOutTabletLight
    case moveCallOutTabletRegular
    case moveToScreenBold
    case moveToScreenLight
    case moveToScreenRegular
    case msTeamsColored
    case multilineChartBold
    case multilineChartFilled
    case multilineChartLight
    case multilineChartRegular
    case multimediaBold
    case multimediaFilled
    case multimediaLight
    case multimediaRegular
    case multipledDevicesBold
    case multipledDevicesLight
    case multipledDevicesRegular
    case musicModeCircleBold
    case musicModeCircleFilled
    case musicModeCircleLight
    case musicModeCircleRegular
    case musicNoteBold
    case musicNoteFilled
    case musicNoteLight
    case musicNoteRegular
    case muteOnEntryBold
    case muteOnEntryFilled
    case muteOnEntryLight
    case muteOnEntryRegular
    case newManagerBold
    case newManagerLight
    case newManagerRegular
    case newTitleBold
    case newTitleLight
    case newTitleRegular
    case newVoicemailBold
    case newVoicemailLight
    case newVoicemailRegular
    case newWhiteboardBold
    case newWhiteboardLight
    case newWhiteboardRegular
    case nextBold
    case nextLight
    case nextRegular
    case noDevicesBold
    case noDevicesLight
    case noDevicesRegular
    case noiseDetectedCanceledFilled
    case noiseDetectedFilled
    case noiseNoneCanceledFilled
    case noiseNoneFilled
    case noiseRemovalBold
    case noiseRemovalLight
    case noiseRemovalRegular
    case noteBold
    case noteLight
    case notePptBold
    case notePptLight
    case notePptRegular
    case noteRegular
    case notesBold
    case notesFilled
    case notesLight
    case notesRegular
    case numberBold
    case numberLight
    case numberRegular
    case oldRemoteBold
    case oldRemoteLight
    case oldRemoteRegular
    case oldTouchBold
    case oldTouchLight
    case oldTouchRegular
    case oneColumnBold
    case oneColumnLight
    case oneColumnRegular
    case oneTimeBold
    case oneTimeLight
    case oneTimeRegular
    case openInFolderBold
    case openInFolderLight
    case openInFolderRegular
    case openPagesBold
    case openPagesLight
    case openPagesRegular
    case otherNumberBold
    case otherNumberFilled
    case otherNumberLight
    case otherNumberRegular
    case otherNumberWarningBold
    case otherNumberWarningLight
    case otherNumberWarningRegular
    case outgoingCallLegacyBold
    case outgoingCallLegacyFilled
    case outgoingCallLegacyLight
    case outgoingCallLegacyRegular
    case overflowLeftBold
    case overflowLeftLight
    case overflowLeftRegular
    case overflowRightBold
    case overflowRightLight
    case overflowRightRegular
    case pairedCameraBold
    case pairedCameraLight
    case pairedCameraRegular
    case pairedDeviceBold
    case pairedDeviceLight
    case pairedDeviceRegular
    case pairedHandsetBold
    case pairedHandsetLight
    case pairedHandsetRegular
    case pairingBold
    case pairingLight
    case pairingRegular
    case parkedBold
    case parkedFilled
    case parkedLight
    case parkedRegular
    case parseBold
    case parseLight
    case parseRegular
    case partialBold
    case partialLight
    case partialRegular
    case participantAddBold
    case participantAddLight
    case participantAddRegular
    case participantBlockedBold
    case participantBlockedLight
    case participantBlockedRegular
    case participantBold
    case participantFilled
    case participantLight
    case participantListBold
    case participantListFilled
    case participantListLight
    case participantListRegular
    case participantRegular
    case participantRemoveBold
    case participantRemoveLight
    case participantRemoveRegular
    case participantUnknownBold
    case participantUnknownLight
    case participantUnknownRegular
    case passMouseBold
    case passMouseLight
    case passMouseRegular
    case pauseBadgeFilled
    case pauseBold
    case pauseFilled
    case pauseLight
    case pauseRegular
    case penBold
    case penFilled
    case penLight
    case penRegular
    case peopleAddBold
    case peopleAddFilled
    case peopleAddLight
    case peopleAddRegular
    case peopleBold
    case peopleCircleBold
    case peopleCircleFilled
    case peopleCircleLight
    case peopleCircleRegular
    case peopleFilled
    case peopleInsightsBold
    case peopleInsightsFilled
    case peopleInsightsLight
    case peopleInsightsRegular
    case peopleLight
    case peopleRegular
    case phoneAlertBold
    case phoneAlertLight
    case phoneAlertRegular
    case phoneBadgeFilled
    case phoneBold
    case phoneFilled
    case phoneLight
    case phoneMutedBold
    case phoneMutedLight
    case phoneMutedRegular
    case phonePrivateBold
    case phonePrivateLight
    case phonePrivateRegular
    case phoneRegular
    case phoneReplyAllBold
    case phoneReplyAllLight
    case phoneReplyAllRegular
    case phoneReplyBold
    case phoneReplyLight
    case phoneReplyRegular
    case pickerBold
    case pickerLight
    case pickerRegular
    case pieChartBold
    case pieChartFilled
    case pieChartLight
    case pieChartRegular
    case pinBold
    case pinFilled
    case pinLight
    case pinListActivityBold
    case pinListActivityLight
    case pinListActivityRegular
    case pinListBold
    case pinListLight
    case pinListRegular
    case pinMutedBold
    case pinMutedFilled
    case pinMutedLight
    case pinMutedRegular
    case pinRegular
    case pipBold
    case pipEnterBold
    case pipEnterLight
    case pipEnterRegular
    case pipExitBold
    case pipExitLight
    case pipExitRegular
    case pipFilled
    case pipLight
    case pipRegular
    case placeholderBold
    case placeholderFilled
    case placeholderLight
    case placeholderRegular
    case playBold
    case playCircleBold
    case playCircleFilled
    case playCircleLight
    case playCircleRegular
    case playFilled
    case playLight
    case playRegular
    case plugAcBold
    case plugAcLight
    case plugAcRegular
    case plusBold
    case plusCircleBold
    case plusCircleFilled
    case plusCircleLight
    case plusCircleRegular
    case plusLight
    case plusRegular
    case pmrBold
    case pmrFilled
    case pmrLight
    case pmrRegular
    case pollBold
    case pollFilled
    case pollLight
    case pollRegular
    case popInBold
    case popInLight
    case popInRegular
    case popOutBold
    case popOutLight
    case popOutRegular
    case popUpBold
    case popUpLight
    case popUpRegular
    case portraitLandscapeBold
    case portraitLandscapeLight
    case portraitLandscapeRegular
    case powerAcBold
    case powerAcLight
    case powerAcRegular
    case powerBold
    case powerLight
    case powerRegular
    case preHeaderBold
    case preHeaderLight
    case preHeaderRegular
    case premiumBold
    case premiumLight
    case premiumRegular
    case presentationBold
    case presentationLight
    case presentationRegular
    case preventDownloadBold
    case preventDownloadFilled
    case preventDownloadLight
    case preventDownloadRegular
    case primaryParticipantBold
    case primaryParticipantLight
    case primaryParticipantRegular
    case printBold
    case printLight
    case printRegular
    case priorityBadgeFilled
    case priorityCircleBold
    case priorityCircleFilled
    case priorityCircleLight
    case priorityCircleRegular
    case priorityCircleTwoBold
    case priorityCircleTwoFilled
    case priorityCircleTwoLight
    case priorityCircleTwoRegular
    case privacyCircleBold
    case privacyCircleFilled
    case privacyCircleLight
    case privacyCircleRegular
    case privateBold
    case privateCircleBold
    case privateCircleFilled
    case privateCircleLight
    case privateCircleRegular
    case privateLight
    case privateMeetingBold
    case privateMeetingLight
    case privateMeetingRegular
    case privateRegular
    case productDemoBold
    case productDemoLight
    case productDemoRegular
    case proximityBold
    case proximityLight
    case proximityMutedBold
    case proximityMutedLight
    case proximityMutedRegular
    case proximityRegular
    case proximityVideoBold
    case proximityVideoLight
    case proximityVideoRegular
    case ptoPresenceBold
    case ptoPresenceFilled
    case ptoPresenceLight
    case ptoPresenceRegular
    case pullCallBold
    case pullCallFilled
    case pullCallLight
    case pullCallRegular
    case qABold
    case qALight
    case qARegular
    case qrCodeBold
    case qrCodeLight
    case qrCodeRegular
    case qrCodeScanBold
    case qrCodeScanLight
    case qrCodeScanRegular
    case qualityBold
    case qualityLight
    case qualityRegular
    case queueContactBold
    case queueContactFilled
    case queueContactLight
    case queueContactRegular
    case quietBold
    case quietHoursPresenceBold
    case quietHoursPresenceFilled
    case quietHoursPresenceLight
    case quietHoursPresenceRegular
    case quietLight
    case quietRegular
    case radioButtonGroupBold
    case radioButtonGroupLight
    case radioButtonGroupRegular
    case raiseHandBold
    case raiseHandCircleFilled
    case raiseHandFilled
    case raiseHandLight
    case raiseHandRegular
    case ramBold
    case ramLight
    case ramRegular
    case reactionsBold
    case reactionsFilled
    case reactionsLight
    case reactionsRegular
    case reactivateBold
    case reactivateLight
    case reactivateRegular
    case receiveVoiceBold
    case receiveVoiceFilled
    case receiveVoiceLight
    case receiveVoiceRegular
    case recentsBold
    case recentsFilled
    case recentsLight
    case recentsPresenceBadgeFilled
    case recentsPresenceBold
    case recentsPresenceFilled
    case recentsPresenceLight
    case recentsPresenceRegular
    case recentsRegular
    case recordActiveBold
    case recordActiveFilled
    case recordActiveLight
    case recordActiveRegular
    case recordBold
    case recordFilled
    case recordLight
    case recordPausedBold
    case recordPausedFilled
    case recordPausedLight
    case recordPausedRegular
    case recordRegular
    case recurringBold
    case recurringLight
    case recurringOffBold
    case recurringOffLight
    case recurringOffRegular
    case recurringRegular
    case redialBold
    case redialLight
    case redialRegular
    case redoBold
    case redoLight
    case redoRegular
    case refreshBold
    case refreshLight
    case refreshRegular
    case remoteDesktopControlBold
    case remoteDesktopControlFilled
    case remoteDesktopControlLight
    case remoteDesktopControlRegular
    case removeBold
    case removeFilled
    case removeLight
    case removeRegular
    case replyBold
    case replyFilled
    case replyLight
    case replyListBold
    case replyListLight
    case replyListRegular
    case replyPrivatelyBold
    case replyPrivatelyLight
    case replyPrivatelyRegular
    case replyRegular
    case resetBold
    case resetLight
    case resetRegular
    case resizeCornerBold
    case resizeCornerLight
    case resizeCornerRegular
    case responsiveMobileBold
    case responsiveMobileLight
    case responsiveMobileRegular
    case restartBold
    case restartLight
    case restartRegular
    case retrieveCallBold
    case retrieveCallFilled
    case retrieveCallLight
    case retrieveCallRegular
    case returnBold
    case returnLight
    case returnRegular
    case rewindTenSecBold
    case rewindTenSecLight
    case rewindTenSecRegular
    case ringtoneBold
    case ringtoneLight
    case ringtoneRegular
    case roomCalendarBold
    case roomCalendarLight
    case roomCalendarRegular
    case roomLightsBold
    case roomLightsFilled
    case roomLightsLight
    case roomLightsRegular
    case rotateContentBold
    case rotateContentFilled
    case rotateContentLight
    case rotateContentRegular
    case rssBold
    case rssFilled
    case rssLight
    case rssRegular
    case ruleBasedBold
    case ruleBasedLight
    case ruleBasedRegular
    case runningApplicationBold
    case runningApplicationFilled
    case runningApplicationLight
    case runningApplicationRegular
    case saveBold
    case saveLight
    case saveRegular
    case saveTranscriptBold
    case saveTranscriptFilled
    case saveTranscriptLight
    case saveTranscriptRegular
    case scanBold
    case scanLight
    case scanRegular
    case scheduleSendBold
    case scheduleSendFilled
    case scheduleSendLight
    case scheduleSendRegular
    case scheduleWinnerBold
    case scheduleWinnerFilled
    case scheduleWinnerLight
    case scheduleWinnerRegular
    case schedulerAvailableBold
    case schedulerAvailableLight
    case schedulerAvailableRegular
    case schedulerNotWorkingHoursBold
    case schedulerNotWorkingHoursLight
    case schedulerNotWorkingHoursRegular
    case schedulerUnavailableBold
    case schedulerUnavailableLight
    case schedulerUnavailableRegular
    case schedulerUnknownBold
    case schedulerUnknownLight
    case schedulerUnknownRegular
    case screenshotBold
    case screenshotDocBold
    case screenshotDocFilled
    case screenshotDocLight
    case screenshotDocRegular
    case screenshotLight
    case screenshotRegular
    case searchBold
    case searchFilled
    case searchLight
    case searchRegular
    case secondaryArrowBold
    case secondaryArrowLight
    case secondaryArrowRegular
    case secureCallLockBold
    case secureCallLockFilled
    case secureCallLockLight
    case secureCallLockRegular
    case secureCallShieldBold
    case secureCallShieldFilled
    case secureCallShieldLight
    case secureCallShieldRegular
    case secureCircleBold
    case secureCircleFilled
    case secureCircleLight
    case secureCircleRegular
    case secureLockBold
    case secureLockFilled
    case secureLockLight
    case secureLockRegular
    case segmentExcludeFilled
    case segmentFilterFilled
    case segmentIncludeFilled
    case selectAllBold
    case selectAllFilled
    case selectAllLight
    case selectAllRegular
    case selectionBold
    case selectionLight
    case selectionRegular
    case sendBold
    case sendFilled
    case sendLight
    case sendRegular
    case sendVoiceBold
    case sendVoiceFilled
    case sendVoiceLight
    case sendVoiceRegular
    case serverBold
    case serverErrorBold
    case serverErrorLight
    case serverErrorRegular
    case serverLight
    case serverRegular
    case servicesBold
    case servicesLight
    case servicesRegular
    case setVariableBold
    case setVariableLight
    case setVariableRegular
    case settingsBold
    case settingsFilled
    case settingsLight
    case settingsRegular
    case setupAssistantBold
    case setupAssistantLight
    case setupAssistantRegular
    case sftpBold
    case sftpLight
    case sftpRegular
    case shapeCircleBold
    case shapeCircleFilled
    case shapeCircleLight
    case shapeCircleMdFilled
    case shapeCircleRegular
    case shapeCircleSmFilled
    case shapeDiagonalLineBold
    case shapeDiagonalLineLight
    case shapeDiagonalLineRegular
    case shapeDiamondBold
    case shapeDiamondFilled
    case shapeDiamondLight
    case shapeDiamondRegular
    case shapeOvalBold
    case shapeOvalLight
    case shapeOvalRegular
    case shapeSquareBold
    case shapeSquareFilled
    case shapeSquareLight
    case shapeSquareRegular
    case shapeTriangleBold
    case shapeTriangleFilled
    case shapeTriangleLight
    case shapeTriangleRegular
    case shapesBold
    case shapesLight
    case shapesRegular
    case shareCNativeAdrBold
    case shareCNativeAdrFilled
    case shareCNativeAdrLight
    case shareCNativeAdrRegular
    case shareCNativeIphBold
    case shareCNativeIphLight
    case shareCNativeIphRegular
    case shareContentOnDeviceBold
    case shareContentOnDeviceLight
    case shareContentOnDeviceRegular
    case shareScreenAddBold
    case shareScreenAddLight
    case shareScreenAddRegular
    case shareScreenBadgeFilled
    case shareScreenBold
    case shareScreenFilled
    case shareScreenLight
    case shareScreenRegular
    case shareSpaceBold
    case shareSpaceLight
    case shareSpaceRegular
    case shieldBold
    case shieldLight
    case shieldRegular
    case shoppingCartBold
    case shoppingCartFilled
    case shoppingCartLight
    case shoppingCartRegular
    case shortTextBoxBold
    case shortTextBoxLight
    case shortTextBoxRegular
    case showBold
    case showFilled
    case showLight
    case showRegular
    case signInBold
    case signInFilled
    case signInForcedBold
    case signInForcedLight
    case signInForcedRegular
    case signInLight
    case signInRegular
    case signLangIntBold
    case signLangIntLight
    case signLangIntRegular
    case signOutBold
    case signOutLight
    case signOutRegular
    case signalFourBold
    case signalFourLight
    case signalFourRegular
    case signalOneBold
    case signalOneLight
    case signalOneRegular
    case signalThreeBold
    case signalThreeLight
    case signalThreeRegular
    case signalTwoBold
    case signalTwoLight
    case signalTwoRegular
    case signalZeroBold
    case signalZeroLight
    case signalZeroRegular
    case simplePromotionBold
    case simplePromotionLight
    case simplePromotionRegular
    case singleNumberReachBold
    case singleNumberReachLight
    case singleNumberReachRegular
    case sipRegistrationInProgressBold
    case sipRegistrationInProgressFilled
    case sipRegistrationInProgressLight
    case sipRegistrationInProgressRegular
    case skipBold
    case skipBwBold
    case skipBwFilled
    case skipBwLight
    case skipBwRegular
    case skipFwBold
    case skipFwFilled
    case skipFwLight
    case skipFwRegular
    case skipLight
    case skipRegular
    case slidoColored
    case smsFilled
    case smsInboundBold
    case smsInboundLight
    case smsInboundRegular
    case smsMessageBold
    case smsMessageFilled
    case smsMessageLight
    case smsMessageRegular
    case smsOutgoingFilled
    case smsUnreadBold
    case smsUnreadLight
    case smsUnreadRegular
    case socialAlexaColored
    case socialAlexa
    case socialFacebookColored
    case socialFacebook
    case socialFbmessengerColored
    case socialFbmessenger
    case socialInstagram
    case socialLineColored
    case socialLine
    case socialMicrosoftColored
    case socialMicrosoft
    case socialMmsColoredGold
    case socialMms
    case socialRcsColored
    case socialRcs
    case socialSmsColoredMint
    case socialSmsOutgoing
    case socialSms
    case socialTelegramColored
    case socialTelegram
    case socialViberColored
    case socialViber
    case socialWechatColored
    case socialWechat
    case socialWhatsappColored
    case socialWhatsapp
    case socialX
    case sortAscendingBold
    case sortAscendingLight
    case sortAscendingRegular
    case sortDescendingBold
    case sortDescendingLight
    case sortDescendingRegular
    case soundDefaultBold
    case soundDefaultLight
    case soundDefaultRegular
    case sparkleBold
    case sparkleFilled
    case sparkleLight
    case sparkleRegular
    case speakerBold
    case speakerDisconnectedBold
    case speakerDisconnectedFilled
    case speakerDisconnectedLight
    case speakerDisconnectedRegular
    case speakerFilled
    case speakerLight
    case speakerMutedBold
    case speakerMutedFilled
    case speakerMutedLight
    case speakerMutedRegular
    case speakerOffBold
    case speakerOffFilled
    case speakerOffLight
    case speakerOffRegular
    case speakerOnBold
    case speakerOnLight
    case speakerOnRegular
    case speakerRegular
    case speakerTurnDownBold
    case speakerTurnDownFilled
    case speakerTurnDownLight
    case speakerTurnDownRegular
    case speakerTurnUpBold
    case speakerTurnUpFilled
    case speakerTurnUpLight
    case speakerTurnUpRegular
    case speedDialBold
    case speedDialFilled
    case speedDialLight
    case speedDialRegular
    case spellCheckerBold
    case spellCheckerLight
    case spellCheckerRegular
    case spinnerBold
    case spinnerInProgressBold
    case spinnerInProgressLight
    case spinnerInProgressRegular
    case spinnerLight
    case spinnerRegular
    case splitViewBold
    case splitViewLight
    case splitViewRegular
    case stackedAreaChartBold
    case stackedAreaChartFilled
    case stackedAreaChartFullBold
    case stackedAreaChartFullFilled
    case stackedAreaChartFullLight
    case stackedAreaChartFullRegular
    case stackedAreaChartLight
    case stackedAreaChartRegular
    case stackedBarChartBold
    case stackedBarChartFilled
    case stackedBarChartFullBold
    case stackedBarChartFullFilled
    case stackedBarChartFullLight
    case stackedBarChartFullRegular
    case stackedBarChartLight
    case stackedBarChartRegular
    case startChatBold
    case startChatLight
    case startChatRegular
    case stethoscopeBold
    case stethoscopeLight
    case stethoscopeRegular
    case stickersBold
    case stickersLight
    case stickersRegular
    case stickiesBold
    case stickiesLight
    case stickiesRegular
    case stopBold
    case stopCircleBold
    case stopCircleFilled
    case stopCircleLight
    case stopCircleRegular
    case stopContentShareBold
    case stopContentShareLight
    case stopContentShareRegular
    case stopFilled
    case stopLight
    case stopRegular
    case storedInfoBold
    case storedInfoFilled
    case storedInfoLight
    case storedInfoRegular
    case streamingBold
    case streamingLight
    case streamingRegular
    case strikethroughBold
    case strikethroughFilled
    case strikethroughLight
    case strikethroughRegular
    case studioModeBold
    case studioModeLight
    case studioModeRegular
    case subscriptBold
    case subscriptLight
    case subscriptRegular
    case superscriptBold
    case superscriptLight
    case superscriptRegular
    case surveyBold
    case surveyFilled
    case surveyLight
    case surveyRegular
    case swiftmatchColored
    case swiftmatch
    case sxEightyCodecBold
    case sxEightyCodecLight
    case sxEightyCodecRegular
    case sxTenBold
    case sxTenLight
    case sxTenRegular
    case sxTwentyBold
    case sxTwentyLight
    case sxTwentyRegular
    case tableBold
    case tableLight
    case tableRegular
    case tabletBold
    case tabletLight
    case tabletRegular
    case tabsBold
    case tabsLight
    case tabsRegular
    case tagBold
    case tagLight
    case tagRegular
    case tapBold
    case tapFilled
    case tapLight
    case tapRegular
    case telepresenceAlertBold
    case telepresenceAlertLight
    case telepresenceAlertMutedBold
    case telepresenceAlertMutedLight
    case telepresenceAlertMutedRegular
    case telepresenceAlertRegular
    case telepresenceBold
    case telepresenceIxFiveThousandBold
    case telepresenceIxFiveThousandLight
    case telepresenceIxFiveThousandRegular
    case telepresenceLight
    case telepresenceMutedBold
    case telepresenceMutedLight
    case telepresenceMutedRegular
    case telepresencePrivateBold
    case telepresencePrivateLight
    case telepresencePrivateRegular
    case telepresenceRegular
    case temperatureBold
    case temperatureLight
    case temperatureRegular
    case testTubeBold
    case testTubeFilled
    case testTubeLight
    case testTubeRegular
    case textAlignCenterBold
    case textAlignCenterFilled
    case textAlignCenterLight
    case textAlignCenterRegular
    case textAlignLeftBold
    case textAlignLeftFilled
    case textAlignLeftLight
    case textAlignLeftRegular
    case textAlignRightBold
    case textAlignRightFilled
    case textAlignRightLight
    case textAlignRightRegular
    case textBold
    case textBoxCursorLight
    case textCodeBlockBold
    case textCodeBlockLight
    case textCodeBlockRegular
    case textHighlightBold
    case textHighlightFilled
    case textHighlightLight
    case textHighlightRegular
    case textLight
    case textRegular
    case threeColumnBold
    case threeColumnLight
    case threeColumnRegular
    case threeDObjectBold
    case threeDObjectLight
    case threeDObjectRegular
    case timeExclusionBold
    case timeExclusionLight
    case timeExclusionRegular
    case tooFastBold
    case tooFastLight
    case tooFastRegular
    case tooSlowBold
    case tooSlowLight
    case tooSlowRegular
    case toolsBold
    case toolsFilled
    case toolsLight
    case toolsRegular
    case touchTenBold
    case touchTenLight
    case touchTenRegular
    case transcriptBold
    case transcriptFilled
    case transcriptLight
    case transcriptRegular
    case translateBold
    case translateLight
    case translateRegular
    case trendingBold
    case trendingLight
    case trendingRegular
    case trimBold
    case trimLight
    case trimRegular
    case twoColumnBold
    case twoColumnLight
    case twoColumnRegular
    case twoWayVoiceStreamBold
    case twoWayVoiceStreamFilled
    case twoWayVoiceStreamLight
    case twoWayVoiceStreamRegular
    case ucmCloudBold
    case ucmCloudLight
    case ucmCloudRegular
    case underlineBold
    case underlineFilled
    case underlineLight
    case underlineRegular
    case undoBold
    case undoLight
    case undoRegular
    case unlinkBold
    case unlinkLight
    case unlinkRegular
    case unreadBold
    case unreadFilled
    case unreadLight
    case unreadRegular
    case unsecureUnlockedBold
    case unsecureUnlockedFilled
    case unsecureUnlockedLight
    case unsecureUnlockedRegular
    case unsortedBold
    case unsortedLight
    case unsortedRegular
    case updateFileShareBold
    case updateFileShareLight
    case updateFileShareRegular
    case uploadBold
    case uploadImageBold
    case uploadImageLight
    case uploadImageRegular
    case uploadLight
    case uploadRegular
    case urgentVoicemailBold
    case urgentVoicemailFilled
    case usbBold
    case usbHeadsetBold
    case usbHeadsetLight
    case usbHeadsetMutedBold
    case usbHeadsetMutedLight
    case usbHeadsetMutedRegular
    case usbHeadsetRegular
    case usbLight
    case usbRegular
    case userBold
    case userDeactivateBold
    case userDeactivateLight
    case userDeactivateRegular
    case userLight
    case userRegular
    case videoBlurBold
    case videoBlurFilled
    case videoBlurLight
    case videoBlurRegular
    case videoBold
    case videoEffectBold
    case videoEffectFilled
    case videoEffectLight
    case videoEffectRegular
    case videoFilled
    case videoLayoutBold
    case videoLayoutEqualBold
    case videoLayoutEqualDualBold
    case videoLayoutEqualDualLight
    case videoLayoutEqualDualRegular
    case videoLayoutEqualFilled
    case videoLayoutEqualLight
    case videoLayoutEqualRegular
    case videoLayoutFilled
    case videoLayoutLight
    case videoLayoutOverlayBold
    case videoLayoutOverlayFilled
    case videoLayoutOverlayLight
    case videoLayoutOverlayRegular
    case videoLayoutPresenterDominantBold
    case videoLayoutPresenterDominantLight
    case videoLayoutPresenterDominantRegular
    case videoLayoutProminentBold
    case videoLayoutProminentFilled
    case videoLayoutProminentLight
    case videoLayoutProminentRegular
    case videoLayoutRegular
    case videoLayoutShareDominantBold
    case videoLayoutShareDominantLight
    case videoLayoutShareDominantRegular
    case videoLayoutSingleBold
    case videoLayoutSingleFilled
    case videoLayoutSingleLight
    case videoLayoutSingleRegular
    case videoLayoutStackBold
    case videoLayoutStackFilled
    case videoLayoutStackLight
    case videoLayoutStackRegular
    case videoLayoutVideoDominantBold
    case videoLayoutVideoDominantFilled
    case videoLayoutVideoDominantLight
    case videoLayoutVideoDominantRegular
    case videoLight
    case videoPlusBold
    case videoPlusFilled
    case videoPlusLight
    case videoPlusRegular
    case videoRegular
    case videoSpeakerTrackBold
    case videoSpeakerTrackFilled
    case videoSpeakerTrackLight
    case videoSpeakerTrackRegular
    case videotronColored
    case videotronHorizontal
    case viewAllBold
    case viewAllLight
    case viewAllRegular
    case viewListBold
    case viewListLight
    case viewListRegular
    case viewStackedBold
    case viewStackedFilled
    case viewStackedLight
    case viewStackedRegular
    case viewThumbnailBold
    case viewThumbnailFilled
    case viewThumbnailLight
    case viewThumbnailRegular
    case visionproBold
    case visionproFilled
    case visionproLight
    case visionproMoveCallInBold
    case visionproMoveCallInFilled
    case visionproMoveCallInLight
    case visionproMoveCallInOutBold
    case visionproMoveCallInOutFilled
    case visionproMoveCallInOutLight
    case visionproMoveCallInOutRegular
    case visionproMoveCallInRegular
    case visionproMoveCallOutBold
    case visionproMoveCallOutFilled
    case visionproMoveCallOutLight
    case visionproMoveCallOutRegular
    case visionproRegular
    case voicemailBold
    case voicemailFilled
    case voicemailLight
    case voicemailRegular
    case vscBold
    case vscLight
    case vscRegular
    case waffleMenuBold
    case waffleMenuLight
    case waffleMenuRegular
    case waitingRoomBold
    case waitingRoomLight
    case waitingRoomRegular
    case wallpaperBold
    case wallpaperLight
    case wallpaperRegular
    case warningBadgeFilled
    case warningBold
    case warningFilled
    case warningLight
    case warningRegular
    case webexBoardBold
    case webexBoardLight
    case webexBoardRegular
    case webexCodecPlusBold
    case webexCodecPlusLight
    case webexCodecPlusRegular
    case webexDeskCameraBold
    case webexDeskCameraLight
    case webexDeskCameraRegular
    case webexHelixBold
    case webexHelixLight
    case webexHelixRegular
    case webexMeetingsBold
    case webexMeetingsFilled
    case webexMeetingsLight
    case webexMeetingsRegular
    case webexQuadCameraBold
    case webexQuadCameraLight
    case webexQuadCameraRegular
    case webexRoomKitBold
    case webexRoomKitLight
    case webexRoomKitPlusBold
    case webexRoomKitPlusLight
    case webexRoomKitPlusRegular
    case webexRoomKitRegular
    case webexShareBold
    case webexShareLight
    case webexShareRegular
    case webexTeamsBold
    case webexTeamsFilled
    case webexTeamsLight
    case webexTeamsNewBold
    case webexTeamsNewFilled
    case webexTeamsNewLight
    case webexTeamsNewRegular
    case webexTeamsRegular
    case webexTeamsRemoveBold
    case webexTeamsRemoveLight
    case webexTeamsRemoveRegular
    case webinarBold
    case webinarFilled
    case webinarLight
    case webinarRegular
    case weeklyRecurringScheduleBold
    case weeklyRecurringScheduleLight
    case weeklyRecurringScheduleRegular
    case whisperCoachBold
    case whisperCoachFilled
    case whisperCoachLight
    case whisperCoachRegular
    case whiteboardBold
    case whiteboardContentBold
    case whiteboardContentFilled
    case whiteboardContentLight
    case whiteboardContentRegular
    case whiteboardFilled
    case whiteboardLight
    case whiteboardRegular
    case widgetBold
    case widgetFilled
    case widgetLight
    case widgetRegular
    case wifiBold
    case wifiErrorBold
    case wifiErrorLight
    case wifiErrorRegular
    case wifiLight
    case wifiRegular
    case wifiSignalGoodBold
    case wifiSignalGoodLight
    case wifiSignalGoodRegular
    case wifiSignalPoorBold
    case wifiSignalPoorLight
    case wifiSignalPoorRegular
    case wifiSignalUnstableBold
    case wifiSignalUnstableLight
    case wifiSignalUnstableRegular
    case windowCornerScrubBold
    case windowCornerScrubLight
    case windowCornerScrubRegular
    case windowRightCornerScrubBold
    case windowRightCornerScrubLight
    case windowRightCornerScrubRegular
    case windowVerticalScrubBold
    case windowVerticalScrubLight
    case windowVerticalScrubRegular
    case workflowDeploymentsBold
    case workflowDeploymentsFilled
    case workflowDeploymentsLight
    case workflowDeploymentsRegular
    case workphoneBold
    case workphoneLight
    case workphoneRegular
    case zoomColored
    case zoomInBold
    case zoomInLight
    case zoomInRegular
    case zoomOutBold
    case zoomOutLight
    case zoomOutRegular

    public var ligature: String {
        switch self {
        case ._invalid: return ""
        case .unhandledCase: return ""
        case .accessibilityBold: return "\u{f101}"
        case .accessibilityLight: return "\u{f102}"
        case .accessibilityRegular: return "\u{f103}"
        case .accessoriesBold: return "\u{f104}"
        case .accessoriesFilled: return "\u{f105}"
        case .accessoriesLight: return "\u{f106}"
        case .accessoriesRegular: return "\u{f107}"
        case .accordianBold: return "\u{f108}"
        case .accordianLight: return "\u{f109}"
        case .accordianRegular: return "\u{f10a}"
        case .activePresenceSmallFilled: return "\u{f10b}"
        case .activeSpeakerAlertBold: return "\u{f10c}"
        case .activeSpeakerAlertLight: return "\u{f10d}"
        case .activeSpeakerAlertRegular: return "\u{f10e}"
        case .activeSpeakerBold: return "\u{f10f}"
        case .activeSpeakerLight: return "\u{f110}"
        case .activeSpeakerLockBold: return "\u{f111}"
        case .activeSpeakerLockLight: return "\u{f112}"
        case .activeSpeakerLockRegular: return "\u{f113}"
        case .activeSpeakerRegular: return "\u{f114}"
        case .addOptionBold: return "\u{f115}"
        case .addOptionLight: return "\u{f116}"
        case .addOptionRegular: return "\u{f117}"
        case .addPhotoBold: return "\u{f118}"
        case .addPhotoLight: return "\u{f119}"
        case .addPhotoRegular: return "\u{f11a}"
        case .addPollBold: return "\u{f11b}"
        case .addPollLight: return "\u{f11c}"
        case .addPollRegular: return "\u{f11d}"
        case .addQuestionBold: return "\u{f11e}"
        case .addQuestionLight: return "\u{f11f}"
        case .addQuestionRegular: return "\u{f120}"
        case .addVideoMarkerBold: return "\u{f121}"
        case .addVideoMarkerLight: return "\u{f122}"
        case .addVideoMarkerRegular: return "\u{f123}"
        case .adjustAudioBold: return "\u{f124}"
        case .adjustAudioLight: return "\u{f125}"
        case .adjustAudioRegular: return "\u{f126}"
        case .adjustBold: return "\u{f127}"
        case .adjustLight: return "\u{f128}"
        case .adjustMicrophoneBold: return "\u{f129}"
        case .adjustMicrophoneLight: return "\u{f12a}"
        case .adjustMicrophoneRegular: return "\u{f12b}"
        case .adjustRegular: return "\u{f12c}"
        case .adjustVideoBold: return "\u{f12d}"
        case .adjustVideoLight: return "\u{f12e}"
        case .adjustVideoRegular: return "\u{f12f}"
        case .adminBold: return "\u{f130}"
        case .adminFilled: return "\u{f131}"
        case .adminLight: return "\u{f132}"
        case .adminRegular: return "\u{f133}"
        case .advanceScheduleBold: return "\u{f134}"
        case .advanceScheduleLight: return "\u{f135}"
        case .advanceScheduleRegular: return "\u{f136}"
        case .advancedNoiseRemovalBold: return "\u{f137}"
        case .advancedNoiseRemovalLight: return "\u{f138}"
        case .advancedNoiseRemovalRegular: return "\u{f139}"
        case .agentUniqueCodeBold: return "\u{f13a}"
        case .agentUniqueCodeLight: return "\u{f13b}"
        case .agentUniqueCodeRegular: return "\u{f13c}"
        case .airplayBold: return "\u{f13d}"
        case .airplayLight: return "\u{f13e}"
        case .airplayRegular: return "\u{f13f}"
        case .alarmBold: return "\u{f140}"
        case .alarmFilled: return "\u{f141}"
        case .alarmLight: return "\u{f142}"
        case .alarmRegular: return "\u{f143}"
        case .alertActiveBold: return "\u{f144}"
        case .alertActiveFilled: return "\u{f145}"
        case .alertActiveLight: return "\u{f146}"
        case .alertActiveRegular: return "\u{f147}"
        case .alertBold: return "\u{f148}"
        case .alertFilled: return "\u{f149}"
        case .alertLight: return "\u{f14a}"
        case .alertMutedBold: return "\u{f14b}"
        case .alertMutedFilled: return "\u{f14c}"
        case .alertMutedLight: return "\u{f14d}"
        case .alertMutedRegular: return "\u{f14e}"
        case .alertRegular: return "\u{f14f}"
        case .alignBottomBold: return "\u{f150}"
        case .alignBottomFilled: return "\u{f151}"
        case .alignBottomLight: return "\u{f152}"
        case .alignBottomRegular: return "\u{f153}"
        case .alignHorizontalCenterBold: return "\u{f154}"
        case .alignHorizontalCenterFilled: return "\u{f155}"
        case .alignHorizontalCenterLight: return "\u{f156}"
        case .alignHorizontalCenterRegular: return "\u{f157}"
        case .alignLeftBold: return "\u{f158}"
        case .alignLeftFilled: return "\u{f159}"
        case .alignLeftLight: return "\u{f15a}"
        case .alignLeftRegular: return "\u{f15b}"
        case .alignRightBold: return "\u{f15c}"
        case .alignRightFilled: return "\u{f15d}"
        case .alignRightLight: return "\u{f15e}"
        case .alignRightRegular: return "\u{f15f}"
        case .alignTopBold: return "\u{f160}"
        case .alignTopFilled: return "\u{f161}"
        case .alignTopLight: return "\u{f162}"
        case .alignTopRegular: return "\u{f163}"
        case .alignVerticalCenterBold: return "\u{f164}"
        case .alignVerticalCenterFilled: return "\u{f165}"
        case .alignVerticalCenterLight: return "\u{f166}"
        case .alignVerticalCenterRegular: return "\u{f167}"
        case .allowToAnnotateBold: return "\u{f168}"
        case .allowToAnnotateLight: return "\u{f169}"
        case .allowToAnnotateRegular: return "\u{f16a}"
        case .alphalinkColored: return "\u{f16b}"
        case .alternateResponseBold: return "\u{f16c}"
        case .alternateResponseLight: return "\u{f16d}"
        case .alternateResponseRegular: return "\u{f16e}"
        case .analogHeadsetBold: return "\u{f16f}"
        case .analogHeadsetLight: return "\u{f170}"
        case .analogHeadsetRegular: return "\u{f171}"
        case .analysisBold: return "\u{f172}"
        case .analysisFilled: return "\u{f173}"
        case .analysisLight: return "\u{f174}"
        case .analysisRegular: return "\u{f175}"
        case .annotateBold: return "\u{f176}"
        case .annotateFilled: return "\u{f177}"
        case .annotateLight: return "\u{f178}"
        case .annotateRegular: return "\u{f179}"
        case .announcementBold: return "\u{f17a}"
        case .announcementFilled: return "\u{f17b}"
        case .announcementLight: return "\u{f17c}"
        case .announcementMutedBold: return "\u{f17d}"
        case .announcementMutedFilled: return "\u{f17e}"
        case .announcementMutedLight: return "\u{f17f}"
        case .announcementMutedRegular: return "\u{f180}"
        case .announcementRegular: return "\u{f181}"
        case .appPushBold: return "\u{f182}"
        case .appPushLight: return "\u{f183}"
        case .appPushRegular: return "\u{f184}"
        case .appearanceBold: return "\u{f185}"
        case .appearanceLight: return "\u{f186}"
        case .appearanceRegular: return "\u{f187}"
        case .applauseBold: return "\u{f188}"
        case .applauseLight: return "\u{f189}"
        case .applauseRegular: return "\u{f18a}"
        case .appleBold: return "\u{f18b}"
        case .appleBusinessChatColored: return "\u{f18c}"
        case .appleFilled: return "\u{f18d}"
        case .appleLight: return "\u{f18e}"
        case .appleRegular: return "\u{f18f}"
        case .applicationBold: return "\u{f190}"
        case .applicationLight: return "\u{f191}"
        case .applicationPanelBold: return "\u{f192}"
        case .applicationPanelLight: return "\u{f193}"
        case .applicationPanelRegular: return "\u{f194}"
        case .applicationRegular: return "\u{f195}"
        case .applicationsBold: return "\u{f196}"
        case .applicationsFilled: return "\u{f197}"
        case .applicationsLight: return "\u{f198}"
        case .applicationsRegular: return "\u{f199}"
        case .approvalPendingBold: return "\u{f19a}"
        case .approvalPendingLight: return "\u{f19b}"
        case .approvalPendingRegular: return "\u{f19c}"
        case .approvalsBold: return "\u{f19d}"
        case .approvalsLight: return "\u{f19e}"
        case .approvalsRegular: return "\u{f19f}"
        case .appsBold: return "\u{f1a0}"
        case .appsFilled: return "\u{f1a1}"
        case .appsLight: return "\u{f1a2}"
        case .appsRegular: return "\u{f1a3}"
        case .archiveBold: return "\u{f1a4}"
        case .archiveLight: return "\u{f1a5}"
        case .archiveRegular: return "\u{f1a6}"
        case .areaChartBold: return "\u{f1a7}"
        case .areaChartFilled: return "\u{f1a8}"
        case .areaChartLight: return "\u{f1a9}"
        case .areaChartRegular: return "\u{f1aa}"
        case .areaSelectorBold: return "\u{f1ab}"
        case .areaSelectorLight: return "\u{f1ac}"
        case .areaSelectorRegular: return "\u{f1ad}"
        case .arrowCircleDownBold: return "\u{f1ae}"
        case .arrowCircleDownFilled: return "\u{f1af}"
        case .arrowCircleDownLight: return "\u{f1b0}"
        case .arrowCircleDownRegular: return "\u{f1b1}"
        case .arrowCircleLeftBold: return "\u{f1b2}"
        case .arrowCircleLeftFilled: return "\u{f1b3}"
        case .arrowCircleLeftLight: return "\u{f1b4}"
        case .arrowCircleLeftRegular: return "\u{f1b5}"
        case .arrowCircleRightBold: return "\u{f1b6}"
        case .arrowCircleRightFilled: return "\u{f1b7}"
        case .arrowCircleRightLight: return "\u{f1b8}"
        case .arrowCircleRightRegular: return "\u{f1b9}"
        case .arrowCircleUpBold: return "\u{f1ba}"
        case .arrowCircleUpFilled: return "\u{f1bb}"
        case .arrowCircleUpLight: return "\u{f1bc}"
        case .arrowCircleUpRegular: return "\u{f1bd}"
        case .arrowDownBold: return "\u{f1be}"
        case .arrowDownFilled: return "\u{f1bf}"
        case .arrowDownLight: return "\u{f1c0}"
        case .arrowDownRegular: return "\u{f1c1}"
        case .arrowLeftBold: return "\u{f1c2}"
        case .arrowLeftFilled: return "\u{f1c3}"
        case .arrowLeftLight: return "\u{f1c4}"
        case .arrowLeftRegular: return "\u{f1c5}"
        case .arrowRightBold: return "\u{f1c6}"
        case .arrowRightFilled: return "\u{f1c7}"
        case .arrowRightLight: return "\u{f1c8}"
        case .arrowRightRegular: return "\u{f1c9}"
        case .arrowTailDownBold: return "\u{f1ca}"
        case .arrowTailDownLight: return "\u{f1cb}"
        case .arrowTailDownRegular: return "\u{f1cc}"
        case .arrowTailUpBold: return "\u{f1cd}"
        case .arrowTailUpLight: return "\u{f1ce}"
        case .arrowTailUpRegular: return "\u{f1cf}"
        case .arrowUpBold: return "\u{f1d0}"
        case .arrowUpFilled: return "\u{f1d1}"
        case .arrowUpLight: return "\u{f1d2}"
        case .arrowUpRegular: return "\u{f1d3}"
        case .askForHelpBold: return "\u{f1d4}"
        case .askForHelpFilled: return "\u{f1d5}"
        case .askForHelpLight: return "\u{f1d6}"
        case .askForHelpRegular: return "\u{f1d7}"
        case .assetsBold: return "\u{f1d8}"
        case .assetsFilled: return "\u{f1d9}"
        case .assetsLight: return "\u{f1da}"
        case .assetsRegular: return "\u{f1db}"
        case .assignHostBold: return "\u{f1dc}"
        case .assignHostLight: return "\u{f1dd}"
        case .assignHostRegular: return "\u{f1de}"
        case .assignPrivilegeBold: return "\u{f1df}"
        case .assignPrivilegeFilled: return "\u{f1e0}"
        case .assignPrivilegeLight: return "\u{f1e1}"
        case .assignPrivilegeRegular: return "\u{f1e2}"
        case .attachmentBold: return "\u{f1e3}"
        case .attachmentLight: return "\u{f1e4}"
        case .attachmentRegular: return "\u{f1e5}"
        case .attendantConsoleBold: return "\u{f1e6}"
        case .attendantConsoleFilled: return "\u{f1e7}"
        case .attendantConsoleLight: return "\u{f1e8}"
        case .attendantConsoleRegular: return "\u{f1e9}"
        case .audioBroadcastBold: return "\u{f1ea}"
        case .audioBroadcastLight: return "\u{f1eb}"
        case .audioBroadcastRegular: return "\u{f1ec}"
        case .audioCallBold: return "\u{f1ed}"
        case .audioCallFilled: return "\u{f1ee}"
        case .audioCallLight: return "\u{f1ef}"
        case .audioCallRegular: return "\u{f1f0}"
        case .audioEnhancementBold: return "\u{f1f1}"
        case .audioEnhancementFilled: return "\u{f1f2}"
        case .audioEnhancementLight: return "\u{f1f3}"
        case .audioEnhancementRegular: return "\u{f1f4}"
        case .audioOnlyBold: return "\u{f1f5}"
        case .audioOnlyLight: return "\u{f1f6}"
        case .audioOnlyRegular: return "\u{f1f7}"
        case .audioOptAllBold: return "\u{f1f8}"
        case .audioOptAllLight: return "\u{f1f9}"
        case .audioOptAllRegular: return "\u{f1fa}"
        case .audioOptionsBold: return "\u{f1fb}"
        case .audioOptionsFilled: return "\u{f1fc}"
        case .audioOptionsLight: return "\u{f1fd}"
        case .audioOptionsRegular: return "\u{f1fe}"
        case .autoDetectionBold: return "\u{f1ff}"
        case .autoDetectionLight: return "\u{f200}"
        case .autoDetectionRegular: return "\u{f201}"
        case .automationBold: return "\u{f202}"
        case .automationLight: return "\u{f203}"
        case .automationRegular: return "\u{f204}"
        case .awayCallingPresenceBold: return "\u{f205}"
        case .awayCallingPresenceFilled: return "\u{f206}"
        case .awayCallingPresenceLight: return "\u{f207}"
        case .awayCallingPresenceRegular: return "\u{f208}"
        case .backBold: return "\u{f209}"
        case .backLight: return "\u{f20a}"
        case .backRegular: return "\u{f20b}"
        case .backToFullScreenBold: return "\u{f20c}"
        case .backToFullScreenLight: return "\u{f20d}"
        case .backToFullScreenRegular: return "\u{f20e}"
        case .backToTopBold: return "\u{f20f}"
        case .backToTopLight: return "\u{f210}"
        case .backToTopRegular: return "\u{f211}"
        case .backlightBold: return "\u{f212}"
        case .backlightLight: return "\u{f213}"
        case .backlightRegular: return "\u{f214}"
        case .backspaceBold: return "\u{f215}"
        case .backspaceLight: return "\u{f216}"
        case .backspaceRegular: return "\u{f217}"
        case .backupDataBold: return "\u{f218}"
        case .backupDataLight: return "\u{f219}"
        case .backupDataRegular: return "\u{f21a}"
        case .barcodeBold: return "\u{f21b}"
        case .barcodeLight: return "\u{f21c}"
        case .barcodeRegular: return "\u{f21d}"
        case .batteryChargingBold: return "\u{f21e}"
        case .batteryChargingLight: return "\u{f21f}"
        case .batteryChargingRegular: return "\u{f220}"
        case .batteryEmptyBold: return "\u{f221}"
        case .batteryEmptyLight: return "\u{f222}"
        case .batteryEmptyRegular: return "\u{f223}"
        case .batteryHighBold: return "\u{f224}"
        case .batteryHighLight: return "\u{f225}"
        case .batteryHighRegular: return "\u{f226}"
        case .batteryLowBold: return "\u{f227}"
        case .batteryLowLight: return "\u{f228}"
        case .batteryLowRegular: return "\u{f229}"
        case .batteryMediumBold: return "\u{f22a}"
        case .batteryMediumLight: return "\u{f22b}"
        case .batteryMediumRegular: return "\u{f22c}"
        case .bitmojiConnectBold: return "\u{f22d}"
        case .bitmojiConnectLight: return "\u{f22e}"
        case .bitmojiConnectRegular: return "\u{f22f}"
        case .bitmojiConnectedBold: return "\u{f230}"
        case .bitmojiConnectedFilled: return "\u{f231}"
        case .bitmojiConnectedLight: return "\u{f232}"
        case .bitmojiConnectedRegular: return "\u{f233}"
        case .blindTransferBold: return "\u{f234}"
        case .blindTransferLight: return "\u{f235}"
        case .blindTransferRegular: return "\u{f236}"
        case .blockQuoteBold: return "\u{f237}"
        case .blockQuoteLight: return "\u{f238}"
        case .blockQuoteRegular: return "\u{f239}"
        case .blockedBold: return "\u{f23a}"
        case .blockedLight: return "\u{f23b}"
        case .blockedRegular: return "\u{f23c}"
        case .bluetoothBold: return "\u{f23d}"
        case .bluetoothFilled: return "\u{f23e}"
        case .bluetoothLight: return "\u{f23f}"
        case .bluetoothMutedBold: return "\u{f240}"
        case .bluetoothMutedLight: return "\u{f241}"
        case .bluetoothMutedRegular: return "\u{f242}"
        case .bluetoothRegular: return "\u{f243}"
        case .boldBold: return "\u{f244}"
        case .boldFilled: return "\u{f245}"
        case .boldLight: return "\u{f246}"
        case .boldRegular: return "\u{f247}"
        case .bookmarkBold: return "\u{f248}"
        case .bookmarkLight: return "\u{f249}"
        case .bookmarkRegular: return "\u{f24a}"
        case .botBold: return "\u{f24b}"
        case .botCustomerAssistantBold: return "\u{f24c}"
        case .botCustomerAssistantLight: return "\u{f24d}"
        case .botCustomerAssistantRegular: return "\u{f24e}"
        case .botExpertAssistantBold: return "\u{f24f}"
        case .botExpertAssistantLight: return "\u{f250}"
        case .botExpertAssistantRegular: return "\u{f251}"
        case .botLight: return "\u{f252}"
        case .botRegular: return "\u{f253}"
        case .boxBold: return "\u{f254}"
        case .boxLight: return "\u{f255}"
        case .boxRegular: return "\u{f256}"
        case .breakoutSessionBold: return "\u{f257}"
        case .breakoutSessionFilled: return "\u{f258}"
        case .breakoutSessionLight: return "\u{f259}"
        case .breakoutSessionRegular: return "\u{f25a}"
        case .brightnessBold: return "\u{f25b}"
        case .brightnessHighBold: return "\u{f25c}"
        case .brightnessHighLight: return "\u{f25d}"
        case .brightnessHighRegular: return "\u{f25e}"
        case .brightnessLight: return "\u{f25f}"
        case .brightnessRegular: return "\u{f260}"
        case .brokenFileBold: return "\u{f261}"
        case .brokenFileFilled: return "\u{f262}"
        case .brokenFileLight: return "\u{f263}"
        case .brokenFileRegular: return "\u{f264}"
        case .browserBold: return "\u{f265}"
        case .browserLight: return "\u{f266}"
        case .browserRegular: return "\u{f267}"
        case .busyPresenceBold: return "\u{f268}"
        case .busyPresenceLight: return "\u{f269}"
        case .busyPresenceRegular: return "\u{f26a}"
        case .buttonCursorBold: return "\u{f26b}"
        case .buttonCursorLight: return "\u{f26c}"
        case .buttonCursorRegular: return "\u{f26d}"
        case .calendarAddBold: return "\u{f26e}"
        case .calendarAddFilled: return "\u{f26f}"
        case .calendarAddLight: return "\u{f270}"
        case .calendarAddRegular: return "\u{f271}"
        case .calendarDayBold: return "\u{f272}"
        case .calendarDayFilled: return "\u{f273}"
        case .calendarDayLight: return "\u{f274}"
        case .calendarDayRegular: return "\u{f275}"
        case .calendarEmptyBold: return "\u{f276}"
        case .calendarEmptyFilled: return "\u{f277}"
        case .calendarEmptyLight: return "\u{f278}"
        case .calendarEmptyRegular: return "\u{f279}"
        case .calendarExternalBold: return "\u{f27a}"
        case .calendarExternalLight: return "\u{f27b}"
        case .calendarExternalRegular: return "\u{f27c}"
        case .calendarFilterBold: return "\u{f27d}"
        case .calendarFilterLight: return "\u{f27e}"
        case .calendarFilterRegular: return "\u{f27f}"
        case .calendarMonthBold: return "\u{f280}"
        case .calendarMonthFilled: return "\u{f281}"
        case .calendarMonthLight: return "\u{f282}"
        case .calendarMonthMoreBold: return "\u{f283}"
        case .calendarMonthMoreLight: return "\u{f284}"
        case .calendarMonthMoreRegular: return "\u{f285}"
        case .calendarMonthRegular: return "\u{f286}"
        case .calendarTodayBold: return "\u{f287}"
        case .calendarTodayLight: return "\u{f288}"
        case .calendarTodayRegular: return "\u{f289}"
        case .calendarWeekBold: return "\u{f28a}"
        case .calendarWeekFilled: return "\u{f28b}"
        case .calendarWeekLight: return "\u{f28c}"
        case .calendarWeekRegular: return "\u{f28d}"
        case .calendarWeekViewBold: return "\u{f28e}"
        case .calendarWeekViewFilled: return "\u{f28f}"
        case .calendarWeekViewLight: return "\u{f290}"
        case .calendarWeekViewRegular: return "\u{f291}"
        case .calendarWorkWeekBold: return "\u{f292}"
        case .calendarWorkWeekFilled: return "\u{f293}"
        case .calendarWorkWeekLight: return "\u{f294}"
        case .calendarWorkWeekRegular: return "\u{f295}"
        case .callBargeBold: return "\u{f296}"
        case .callBargeFilled: return "\u{f297}"
        case .callBargeLight: return "\u{f298}"
        case .callBargeRegular: return "\u{f299}"
        case .callBargeSilentBold: return "\u{f29a}"
        case .callBargeSilentLight: return "\u{f29b}"
        case .callBargeSilentRegular: return "\u{f29c}"
        case .callForwardSettingsBold: return "\u{f29d}"
        case .callForwardSettingsFilled: return "\u{f29e}"
        case .callForwardSettingsLight: return "\u{f29f}"
        case .callForwardSettingsRegular: return "\u{f2a0}"
        case .callGroupPickupBold: return "\u{f2a1}"
        case .callGroupPickupFilled: return "\u{f2a2}"
        case .callGroupPickupLight: return "\u{f2a3}"
        case .callGroupPickupRegular: return "\u{f2a4}"
        case .callHandlingBold: return "\u{f2a5}"
        case .callHandlingLight: return "\u{f2a6}"
        case .callHandlingRegular: return "\u{f2a7}"
        case .callHoldBold: return "\u{f2a8}"
        case .callHoldFilled: return "\u{f2a9}"
        case .callHoldLight: return "\u{f2aa}"
        case .callHoldRegular: return "\u{f2ab}"
        case .callIncomingBold: return "\u{f2ac}"
        case .callIncomingLight: return "\u{f2ad}"
        case .callIncomingRegular: return "\u{f2ae}"
        case .callListBold: return "\u{f2af}"
        case .callListLight: return "\u{f2b0}"
        case .callListRegular: return "\u{f2b1}"
        case .callMergeBold: return "\u{f2b2}"
        case .callMergeLight: return "\u{f2b3}"
        case .callMergeRegular: return "\u{f2b4}"
        case .callMissedBold: return "\u{f2b5}"
        case .callMissedFilled: return "\u{f2b6}"
        case .callMissedLight: return "\u{f2b7}"
        case .callMissedRegular: return "\u{f2b8}"
        case .callMoreBold: return "\u{f2b9}"
        case .callMoreLight: return "\u{f2ba}"
        case .callMoreRegular: return "\u{f2bb}"
        case .callOutgoingBold: return "\u{f2bc}"
        case .callOutgoingLight: return "\u{f2bd}"
        case .callOutgoingRegular: return "\u{f2be}"
        case .callPickupBold: return "\u{f2bf}"
        case .callPickupFilled: return "\u{f2c0}"
        case .callPickupLight: return "\u{f2c1}"
        case .callPickupOtherBold: return "\u{f2c2}"
        case .callPickupOtherFilled: return "\u{f2c3}"
        case .callPickupOtherLight: return "\u{f2c4}"
        case .callPickupOtherRegular: return "\u{f2c5}"
        case .callPickupRegular: return "\u{f2c6}"
        case .callPrivateBold: return "\u{f2c7}"
        case .callPrivateFilled: return "\u{f2c8}"
        case .callPrivateLight: return "\u{f2c9}"
        case .callPrivateRegular: return "\u{f2ca}"
        case .callRemoteBold: return "\u{f2cb}"
        case .callRemoteFilled: return "\u{f2cc}"
        case .callRemoteLight: return "\u{f2cd}"
        case .callRemoteRegular: return "\u{f2ce}"
        case .callRequestBold: return "\u{f2cf}"
        case .callRequestFilled: return "\u{f2d0}"
        case .callRequestLight: return "\u{f2d1}"
        case .callRequestRegular: return "\u{f2d2}"
        case .callReturnBold: return "\u{f2d3}"
        case .callReturnFilled: return "\u{f2d4}"
        case .callReturnLight: return "\u{f2d5}"
        case .callReturnRegular: return "\u{f2d6}"
        case .callRoomBold: return "\u{f2d7}"
        case .callRoomLight: return "\u{f2d8}"
        case .callRoomRegular: return "\u{f2d9}"
        case .callSettingsBold: return "\u{f2da}"
        case .callSettingsLight: return "\u{f2db}"
        case .callSettingsRegular: return "\u{f2dc}"
        case .callSplitBold: return "\u{f2dd}"
        case .callSplitLight: return "\u{f2de}"
        case .callSplitRegular: return "\u{f2df}"
        case .callSwapBold: return "\u{f2e0}"
        case .callSwapLight: return "\u{f2e1}"
        case .callSwapRegular: return "\u{f2e2}"
        case .callVoicemailBold: return "\u{f2e3}"
        case .callVoicemailLight: return "\u{f2e4}"
        case .callVoicemailRegular: return "\u{f2e5}"
        case .callrateBold: return "\u{f2e6}"
        case .callrateLight: return "\u{f2e7}"
        case .callrateRegular: return "\u{f2e8}"
        case .cameraAuxBold: return "\u{f2e9}"
        case .cameraAuxFilled: return "\u{f2ea}"
        case .cameraAuxLight: return "\u{f2eb}"
        case .cameraAuxRegular: return "\u{f2ec}"
        case .cameraBold: return "\u{f2ed}"
        case .cameraFilled: return "\u{f2ee}"
        case .cameraLight: return "\u{f2ef}"
        case .cameraMutedBold: return "\u{f2f0}"
        case .cameraMutedCircleFilled: return "\u{f2f1}"
        case .cameraMutedFilled: return "\u{f2f2}"
        case .cameraMutedLight: return "\u{f2f3}"
        case .cameraMutedRegular: return "\u{f2f4}"
        case .cameraOnBold: return "\u{f2f5}"
        case .cameraOnFilled: return "\u{f2f6}"
        case .cameraOnLight: return "\u{f2f7}"
        case .cameraOnRegular: return "\u{f2f8}"
        case .cameraPhotoBold: return "\u{f2f9}"
        case .cameraPhotoFilled: return "\u{f2fa}"
        case .cameraPhotoLight: return "\u{f2fb}"
        case .cameraPhotoRegular: return "\u{f2fc}"
        case .cameraPresenceBold: return "\u{f2fd}"
        case .cameraPresenceFilled: return "\u{f2fe}"
        case .cameraPresenceLight: return "\u{f2ff}"
        case .cameraPresenceRegular: return "\u{f300}"
        case .cameraRegular: return "\u{f301}"
        case .cameraSwapBold: return "\u{f302}"
        case .cameraSwapLight: return "\u{f303}"
        case .cameraSwapRegular: return "\u{f304}"
        case .campaignManagementBold: return "\u{f305}"
        case .campaignManagementLight: return "\u{f306}"
        case .campaignManagementRegular: return "\u{f307}"
        case .cancelBold: return "\u{f308}"
        case .cancelLight: return "\u{f309}"
        case .cancelRegular: return "\u{f30a}"
        case .capsLockBold: return "\u{f30b}"
        case .capsLockLight: return "\u{f30c}"
        case .capsLockRegular: return "\u{f30d}"
        case .captureRewindBold: return "\u{f30e}"
        case .captureRewindLight: return "\u{f30f}"
        case .captureRewindRegular: return "\u{f310}"
        case .caroselBold: return "\u{f311}"
        case .caroselLight: return "\u{f312}"
        case .caroselRegular: return "\u{f313}"
        case .carouselTextBold: return "\u{f314}"
        case .carouselTextLight: return "\u{f315}"
        case .carouselTextRegular: return "\u{f316}"
        case .cellularBold: return "\u{f317}"
        case .cellularLight: return "\u{f318}"
        case .cellularRegular: return "\u{f319}"
        case .centerAlignedBold: return "\u{f31a}"
        case .centerAlignedLight: return "\u{f31b}"
        case .centerAlignedRegular: return "\u{f31c}"
        case .centerBold: return "\u{f31d}"
        case .centerLight: return "\u{f31e}"
        case .centerRegular: return "\u{f31f}"
        case .certificateBold: return "\u{f320}"
        case .certificateInvalidBold: return "\u{f321}"
        case .certificateInvalidLight: return "\u{f322}"
        case .certificateInvalidRegular: return "\u{f323}"
        case .certificateLight: return "\u{f324}"
        case .certificateRegular: return "\u{f325}"
        case .certifiedBold: return "\u{f326}"
        case .certifiedLight: return "\u{f327}"
        case .certifiedRegular: return "\u{f328}"
        case .chPSearchBold: return "\u{f329}"
        case .chPSearchLight: return "\u{f32a}"
        case .chPSearchRegular: return "\u{f32b}"
        case .channelUssdBold: return "\u{f32c}"
        case .channelUssdLight: return "\u{f32d}"
        case .channelUssdRegular: return "\u{f32e}"
        case .chatBold: return "\u{f32f}"
        case .chatFilled: return "\u{f330}"
        case .chatGroupBold: return "\u{f331}"
        case .chatGroupFilled: return "\u{f332}"
        case .chatGroupLight: return "\u{f333}"
        case .chatGroupRegular: return "\u{f334}"
        case .chatLight: return "\u{f335}"
        case .chatMuteBold: return "\u{f336}"
        case .chatMuteLight: return "\u{f337}"
        case .chatMuteRegular: return "\u{f338}"
        case .chatRegular: return "\u{f339}"
        case .checkBold: return "\u{f33a}"
        case .checkCircleBadgeFilled: return "\u{f33b}"
        case .checkCircleBold: return "\u{f33c}"
        case .checkCircleFilled: return "\u{f33d}"
        case .checkCircleLight: return "\u{f33e}"
        case .checkCircleRegular: return "\u{f33f}"
        case .checkLight: return "\u{f340}"
        case .checkRegular: return "\u{f341}"
        case .checkboxGroupBold: return "\u{f342}"
        case .checkboxGroupLight: return "\u{f343}"
        case .checkboxGroupRegular: return "\u{f344}"
        case .ciscoAiAssistantDefault: return "\u{f345}"
        case .ciscoAiAssistantInactive: return "\u{f346}"
        case .ciscoAiAssistantSolidBold: return "\u{f347}"
        case .cleanUpBold: return "\u{f348}"
        case .cleanUpLight: return "\u{f349}"
        case .cleanUpRegular: return "\u{f34a}"
        case .clearBadgeFilled: return "\u{f34b}"
        case .clearBold: return "\u{f34c}"
        case .clearFilled: return "\u{f34d}"
        case .clearLight: return "\u{f34e}"
        case .clearRegular: return "\u{f34f}"
        case .closeSpaceBold: return "\u{f350}"
        case .closeSpaceLight: return "\u{f351}"
        case .closeSpaceRegular: return "\u{f352}"
        case .closedCaptionBadgeBold: return "\u{f353}"
        case .closedCaptionBadgeFilled: return "\u{f354}"
        case .closedCaptionBadgeLight: return "\u{f355}"
        case .closedCaptionBadgeRegular: return "\u{f356}"
        case .closedCaptionsBold: return "\u{f357}"
        case .closedCaptionsFilled: return "\u{f358}"
        case .closedCaptionsLight: return "\u{f359}"
        case .closedCaptionsRegular: return "\u{f35a}"
        case .cloudBold: return "\u{f35b}"
        case .cloudDownloadBold: return "\u{f35c}"
        case .cloudDownloadLight: return "\u{f35d}"
        case .cloudDownloadRegular: return "\u{f35e}"
        case .cloudFilled: return "\u{f35f}"
        case .cloudFrameBold: return "\u{f360}"
        case .cloudFrameFilled: return "\u{f361}"
        case .cloudFrameLight: return "\u{f362}"
        case .cloudFrameRegular: return "\u{f363}"
        case .cloudLight: return "\u{f364}"
        case .cloudMutedBold: return "\u{f365}"
        case .cloudMutedFilled: return "\u{f366}"
        case .cloudMutedLight: return "\u{f367}"
        case .cloudMutedRegular: return "\u{f368}"
        case .cloudRegular: return "\u{f369}"
        case .cloudUploadBold: return "\u{f36a}"
        case .cloudUploadLight: return "\u{f36b}"
        case .cloudUploadRegular: return "\u{f36c}"
        case .codeBlockBold: return "\u{f36d}"
        case .codeBlockLight: return "\u{f36e}"
        case .codeBlockRegular: return "\u{f36f}"
        case .coffeeBold: return "\u{f370}"
        case .coffeeLight: return "\u{f371}"
        case .coffeeRegular: return "\u{f372}"
        case .colorBold: return "\u{f373}"
        case .colorFilled: return "\u{f374}"
        case .colorLight: return "\u{f375}"
        case .colorRegular: return "\u{f376}"
        case .colourPaletteBold: return "\u{f377}"
        case .colourPaletteFilled: return "\u{f378}"
        case .colourPaletteLight: return "\u{f379}"
        case .colourPaletteRegular: return "\u{f37a}"
        case .commentingBold: return "\u{f37b}"
        case .commentingFilled: return "\u{f37c}"
        case .commentingLight: return "\u{f37d}"
        case .commentingRegular: return "\u{f37e}"
        case .companyBold: return "\u{f37f}"
        case .companyLight: return "\u{f380}"
        case .companyRegular: return "\u{f381}"
        case .completedByBaseBold: return "\u{f382}"
        case .completedByBaseLight: return "\u{f383}"
        case .completedByBaseRegular: return "\u{f384}"
        case .completedByTimeBold: return "\u{f385}"
        case .completedByTimeLight: return "\u{f386}"
        case .completedByTimeRegular: return "\u{f387}"
        case .computerBold: return "\u{f388}"
        case .computerLight: return "\u{f389}"
        case .computerRegular: return "\u{f38a}"
        case .conciergeBold: return "\u{f38b}"
        case .conciergeLight: return "\u{f38c}"
        case .conciergeRegular: return "\u{f38d}"
        case .conditionalBlockBold: return "\u{f38e}"
        case .conditionalBlockLight: return "\u{f38f}"
        case .conditionalBlockRegular: return "\u{f390}"
        case .connectBold: return "\u{f391}"
        case .connectLight: return "\u{f392}"
        case .connectRegular: return "\u{f393}"
        case .contactCardBold: return "\u{f394}"
        case .contactCardFilled: return "\u{f395}"
        case .contactCardLight: return "\u{f396}"
        case .contactCardRegular: return "\u{f397}"
        case .contactsBold: return "\u{f398}"
        case .contactsFilled: return "\u{f399}"
        case .contactsLight: return "\u{f39a}"
        case .contactsRegular: return "\u{f39b}"
        case .contentDownloadBold: return "\u{f39c}"
        case .contentDownloadFilled: return "\u{f39d}"
        case .contentDownloadLight: return "\u{f39e}"
        case .contentDownloadRegular: return "\u{f39f}"
        case .contentShareBold: return "\u{f3a0}"
        case .contentShareLight: return "\u{f3a1}"
        case .contentShareRegular: return "\u{f3a2}"
        case .contrastBold: return "\u{f3a3}"
        case .contrastLight: return "\u{f3a4}"
        case .contrastRegular: return "\u{f3a5}"
        case .copyBold: return "\u{f3a6}"
        case .copyLight: return "\u{f3a7}"
        case .copyRegular: return "\u{f3a8}"
        case .cpuBold: return "\u{f3a9}"
        case .cpuLight: return "\u{f3aa}"
        case .cpuRegular: return "\u{f3ab}"
        case .createAGroupBold: return "\u{f3ac}"
        case .createAGroupFilled: return "\u{f3ad}"
        case .createAGroupLight: return "\u{f3ae}"
        case .createAGroupRegular: return "\u{f3af}"
        case .cropBold: return "\u{f3b0}"
        case .cropLight: return "\u{f3b1}"
        case .cropRegular: return "\u{f3b2}"
        case .cucmConnectionBold: return "\u{f3b3}"
        case .cucmConnectionLight: return "\u{f3b4}"
        case .cucmConnectionRegular: return "\u{f3b5}"
        case .customCodeEditorBold: return "\u{f3b6}"
        case .customCodeEditorLight: return "\u{f3b7}"
        case .customCodeEditorRegular: return "\u{f3b8}"
        case .dailyRecurringScheduleBold: return "\u{f3b9}"
        case .dailyRecurringScheduleLight: return "\u{f3ba}"
        case .dailyRecurringScheduleRegular: return "\u{f3bb}"
        case .dashboardBold: return "\u{f3bc}"
        case .dashboardFilled: return "\u{f3bd}"
        case .dashboardLight: return "\u{f3be}"
        case .dashboardRegular: return "\u{f3bf}"
        case .dataManagementBold: return "\u{f3c0}"
        case .dataManagementFilled: return "\u{f3c1}"
        case .dataManagementLight: return "\u{f3c2}"
        case .dataManagementRegular: return "\u{f3c3}"
        case .dataRangeSelectionBold: return "\u{f3c4}"
        case .dataRangeSelectionFilled: return "\u{f3c5}"
        case .dataRangeSelectionLight: return "\u{f3c6}"
        case .dataRangeSelectionRegular: return "\u{f3c7}"
        case .declineBold: return "\u{f3c8}"
        case .declineFilled: return "\u{f3c9}"
        case .declineLight: return "\u{f3ca}"
        case .declineRegular: return "\u{f3cb}"
        case .deleteBold: return "\u{f3cc}"
        case .deleteFilled: return "\u{f3cd}"
        case .deleteLight: return "\u{f3ce}"
        case .deleteRegular: return "\u{f3cf}"
        case .deploymentEvaluationProgressBold: return "\u{f3d0}"
        case .deploymentEvaluationProgressLight: return "\u{f3d1}"
        case .deploymentEvaluationProgressRegular: return "\u{f3d2}"
        case .deploymentProgressBold: return "\u{f3d3}"
        case .deploymentProgressLight: return "\u{f3d4}"
        case .deploymentProgressRegular: return "\u{f3d5}"
        case .deploymentRecurringBold: return "\u{f3d6}"
        case .deploymentRecurringLight: return "\u{f3d7}"
        case .deploymentRecurringRegular: return "\u{f3d8}"
        case .deploymentWinnerPendingBold: return "\u{f3d9}"
        case .deploymentWinnerPendingLight: return "\u{f3da}"
        case .deploymentWinnerPendingRegular: return "\u{f3db}"
        case .deskPhoneBold: return "\u{f3dc}"
        case .deskPhoneFilled: return "\u{f3dd}"
        case .deskPhoneLight: return "\u{f3de}"
        case .deskPhoneRegular: return "\u{f3df}"
        case .deskPhoneWarningBold: return "\u{f3e0}"
        case .deskPhoneWarningLight: return "\u{f3e1}"
        case .deskPhoneWarningRegular: return "\u{f3e2}"
        case .deviceConnectionBold: return "\u{f3e3}"
        case .deviceConnectionFilled: return "\u{f3e4}"
        case .deviceConnectionLight: return "\u{f3e5}"
        case .deviceConnectionRegular: return "\u{f3e6}"
        case .deviceInRoomBold: return "\u{f3e7}"
        case .deviceInRoomEndBold: return "\u{f3e8}"
        case .deviceInRoomEndLight: return "\u{f3e9}"
        case .deviceInRoomEndRegular: return "\u{f3ea}"
        case .deviceInRoomFilled: return "\u{f3eb}"
        case .deviceInRoomLight: return "\u{f3ec}"
        case .deviceInRoomRegular: return "\u{f3ed}"
        case .deviceMutedBold: return "\u{f3ee}"
        case .deviceMutedLight: return "\u{f3ef}"
        case .deviceMutedRegular: return "\u{f3f0}"
        case .devicePolicyControllerBold: return "\u{f3f1}"
        case .devicePolicyControllerLight: return "\u{f3f2}"
        case .devicePolicyControllerRegular: return "\u{f3f3}"
        case .diagnosticsBold: return "\u{f3f4}"
        case .diagnosticsLight: return "\u{f3f5}"
        case .diagnosticsRegular: return "\u{f3f6}"
        case .dialpadBold: return "\u{f3f7}"
        case .dialpadLight: return "\u{f3f8}"
        case .dialpadRegular: return "\u{f3f9}"
        case .directionalPadBold: return "\u{f3fa}"
        case .directionalPadFilled: return "\u{f3fb}"
        case .directionalPadLight: return "\u{f3fc}"
        case .directionalPadRegular: return "\u{f3fd}"
        case .directoryBold: return "\u{f3fe}"
        case .directoryLight: return "\u{f3ff}"
        case .directoryRegular: return "\u{f400}"
        case .disappearingPenBold: return "\u{f401}"
        case .disappearingPenLight: return "\u{f402}"
        case .disappearingPenRegular: return "\u{f403}"
        case .discBold: return "\u{f404}"
        case .discConnectedBold: return "\u{f405}"
        case .discConnectedLight: return "\u{f406}"
        case .discConnectedRegular: return "\u{f407}"
        case .discLight: return "\u{f408}"
        case .discRegular: return "\u{f409}"
        case .disconnectBold: return "\u{f40a}"
        case .disconnectFilled: return "\u{f40b}"
        case .disconnectLight: return "\u{f40c}"
        case .disconnectRegular: return "\u{f40d}"
        case .dislikeBold: return "\u{f40e}"
        case .dislikeFilled: return "\u{f40f}"
        case .dislikeLight: return "\u{f410}"
        case .dislikeRegular: return "\u{f411}"
        case .displayBold: return "\u{f412}"
        case .displayInputBold: return "\u{f413}"
        case .displayInputLight: return "\u{f414}"
        case .displayInputRegular: return "\u{f415}"
        case .displayLight: return "\u{f416}"
        case .displayRegular: return "\u{f417}"
        case .displayWarningBold: return "\u{f418}"
        case .displayWarningLight: return "\u{f419}"
        case .displayWarningRegular: return "\u{f41a}"
        case .distributeHorizontalBold: return "\u{f41b}"
        case .distributeHorizontalFilled: return "\u{f41c}"
        case .distributeHorizontalLight: return "\u{f41d}"
        case .distributeHorizontalRegular: return "\u{f41e}"
        case .distributeVerticallyBold: return "\u{f41f}"
        case .distributeVerticallyFilled: return "\u{f420}"
        case .distributeVerticallyLight: return "\u{f421}"
        case .distributeVerticallyRegular: return "\u{f422}"
        case .dndPresenceBadgeFilled: return "\u{f423}"
        case .dndPresenceBold: return "\u{f424}"
        case .dndPresenceFilled: return "\u{f425}"
        case .dndPresenceLight: return "\u{f426}"
        case .dndPresenceRegular: return "\u{f427}"
        case .documentBold: return "\u{f428}"
        case .documentCameraBold: return "\u{f429}"
        case .documentCameraDisconnectedBold: return "\u{f42a}"
        case .documentCameraDisconnectedLight: return "\u{f42b}"
        case .documentCameraDisconnectedRegular: return "\u{f42c}"
        case .documentCameraLight: return "\u{f42d}"
        case .documentCameraRegular: return "\u{f42e}"
        case .documentCreateBold: return "\u{f42f}"
        case .documentCreateFilled: return "\u{f430}"
        case .documentCreateLight: return "\u{f431}"
        case .documentCreateRegular: return "\u{f432}"
        case .documentFilled: return "\u{f433}"
        case .documentLight: return "\u{f434}"
        case .documentMoveBold: return "\u{f435}"
        case .documentMoveFilled: return "\u{f436}"
        case .documentMoveLight: return "\u{f437}"
        case .documentMoveRegular: return "\u{f438}"
        case .documentRegular: return "\u{f439}"
        case .documentShareBold: return "\u{f43a}"
        case .documentShareFilled: return "\u{f43b}"
        case .documentShareLight: return "\u{f43c}"
        case .documentShareRegular: return "\u{f43d}"
        case .doneAllBold: return "\u{f43e}"
        case .doneAllLight: return "\u{f43f}"
        case .doneAllRegular: return "\u{f440}"
        case .donutChartBold: return "\u{f441}"
        case .donutChartFilled: return "\u{f442}"
        case .donutChartLight: return "\u{f443}"
        case .donutChartRegular: return "\u{f444}"
        case .downloadBold: return "\u{f445}"
        case .downloadFilled: return "\u{f446}"
        case .downloadLight: return "\u{f447}"
        case .downloadRegular: return "\u{f448}"
        case .draftBold: return "\u{f449}"
        case .draftFilled: return "\u{f44a}"
        case .draftIndicatorBold: return "\u{f44b}"
        case .draftIndicatorSmallFilled: return "\u{f44c}"
        case .draftLight: return "\u{f44d}"
        case .draftRegular: return "\u{f44e}"
        case .dragBold: return "\u{f44f}"
        case .dragLight: return "\u{f450}"
        case .dragRegular: return "\u{f451}"
        case .draggerHorizontalBold: return "\u{f452}"
        case .draggerHorizontalLight: return "\u{f453}"
        case .draggerHorizontalRegular: return "\u{f454}"
        case .draggerVerticalBold: return "\u{f455}"
        case .draggerVerticalLight: return "\u{f456}"
        case .draggerVerticalRegular: return "\u{f457}"
        case .driveModeBold: return "\u{f458}"
        case .driveModeLight: return "\u{f459}"
        case .driveModeRegular: return "\u{f45a}"
        case .dropdownBold: return "\u{f45b}"
        case .dropdownLight: return "\u{f45c}"
        case .dropdownRegular: return "\u{f45d}"
        case .dxEightyBold: return "\u{f45e}"
        case .dxEightyFilled: return "\u{f45f}"
        case .dxEightyLight: return "\u{f460}"
        case .dxEightyRegular: return "\u{f461}"
        case .dxSeventyBold: return "\u{f462}"
        case .dxSeventyLight: return "\u{f463}"
        case .dxSeventyRegular: return "\u{f464}"
        case .editBold: return "\u{f465}"
        case .editFilled: return "\u{f466}"
        case .editLight: return "\u{f467}"
        case .editRegular: return "\u{f468}"
        case .editablePartialBold: return "\u{f469}"
        case .editablePartialLight: return "\u{f46a}"
        case .editablePartialRegular: return "\u{f46b}"
        case .educationBold: return "\u{f46c}"
        case .educationFilled: return "\u{f46d}"
        case .educationLight: return "\u{f46e}"
        case .educationRegular: return "\u{f46f}"
        case .emailBold: return "\u{f470}"
        case .emailDeliveredBold: return "\u{f471}"
        case .emailDeliveredLight: return "\u{f472}"
        case .emailDeliveredRegular: return "\u{f473}"
        case .emailFailureBold: return "\u{f474}"
        case .emailFailureLight: return "\u{f475}"
        case .emailFailureRegular: return "\u{f476}"
        case .emailFilled: return "\u{f477}"
        case .emailInviteBold: return "\u{f478}"
        case .emailInviteLight: return "\u{f479}"
        case .emailInviteRegular: return "\u{f47a}"
        case .emailLight: return "\u{f47b}"
        case .emailOutgoingBold: return "\u{f47c}"
        case .emailOutgoingFilled: return "\u{f47d}"
        case .emailOutgoingLight: return "\u{f47e}"
        case .emailOutgoingRegular: return "\u{f47f}"
        case .emailReadBold: return "\u{f480}"
        case .emailReadFilled: return "\u{f481}"
        case .emailReadLight: return "\u{f482}"
        case .emailReadRegular: return "\u{f483}"
        case .emailRegular: return "\u{f484}"
        case .emojiExcitedBold: return "\u{f485}"
        case .emojiExcitedFilled: return "\u{f486}"
        case .emojiExcitedLight: return "\u{f487}"
        case .emojiExcitedRegular: return "\u{f488}"
        case .emojiHappyBold: return "\u{f489}"
        case .emojiHappyFilled: return "\u{f48a}"
        case .emojiHappyLight: return "\u{f48b}"
        case .emojiHappyRegular: return "\u{f48c}"
        case .emojiPassiveBold: return "\u{f48d}"
        case .emojiPassiveFilled: return "\u{f48e}"
        case .emojiPassiveLight: return "\u{f48f}"
        case .emojiPassiveRegular: return "\u{f490}"
        case .emojiSadBold: return "\u{f491}"
        case .emojiSadFilled: return "\u{f492}"
        case .emojiSadLight: return "\u{f493}"
        case .emojiSadRegular: return "\u{f494}"
        case .emojiUnhappyBold: return "\u{f495}"
        case .emojiUnhappyFilled: return "\u{f496}"
        case .emojiUnhappyLight: return "\u{f497}"
        case .emojiUnhappyRegular: return "\u{f498}"
        case .encryptionCircleFilled: return "\u{f499}"
        case .encryptionFilled: return "\u{f49a}"
        case .endRemoteDesktopControlBold: return "\u{f49b}"
        case .endRemoteDesktopControlLight: return "\u{f49c}"
        case .endRemoteDesktopControlRegular: return "\u{f49d}"
        case .endToEndEncryptionCircleFilled: return "\u{f49e}"
        case .endToEndEncryptionFilled: return "\u{f49f}"
        case .endpointBlockedBold: return "\u{f4a0}"
        case .endpointBlockedLight: return "\u{f4a1}"
        case .endpointBlockedRegular: return "\u{f4a2}"
        case .endpointBold: return "\u{f4a3}"
        case .endpointGTwoBold: return "\u{f4a4}"
        case .endpointGTwoLight: return "\u{f4a5}"
        case .endpointGTwoRegular: return "\u{f4a6}"
        case .endpointGTwoSeventyBold: return "\u{f4a7}"
        case .endpointGTwoSeventyDualBold: return "\u{f4a8}"
        case .endpointGTwoSeventyDualLight: return "\u{f4a9}"
        case .endpointGTwoSeventyDualRegular: return "\u{f4aa}"
        case .endpointGTwoSeventyLight: return "\u{f4ab}"
        case .endpointGTwoSeventyRegular: return "\u{f4ac}"
        case .endpointGTwoStandBold: return "\u{f4ad}"
        case .endpointGTwoStandLight: return "\u{f4ae}"
        case .endpointGTwoStandRegular: return "\u{f4af}"
        case .endpointLight: return "\u{f4b0}"
        case .endpointMxEightHundredBold: return "\u{f4b1}"
        case .endpointMxEightHundredDualBold: return "\u{f4b2}"
        case .endpointMxEightHundredDualLight: return "\u{f4b3}"
        case .endpointMxEightHundredDualRegular: return "\u{f4b4}"
        case .endpointMxEightHundredLight: return "\u{f4b5}"
        case .endpointMxEightHundredRegular: return "\u{f4b6}"
        case .endpointRegular: return "\u{f4b7}"
        case .endpointStandBold: return "\u{f4b8}"
        case .endpointStandFilled: return "\u{f4b9}"
        case .endpointStandLight: return "\u{f4ba}"
        case .endpointStandRegular: return "\u{f4bb}"
        case .endpointWarningBold: return "\u{f4bc}"
        case .endpointWarningLight: return "\u{f4bd}"
        case .endpointWarningRegular: return "\u{f4be}"
        case .enterBold: return "\u{f4bf}"
        case .enterLight: return "\u{f4c0}"
        case .enterRegular: return "\u{f4c1}"
        case .enterRoomBold: return "\u{f4c2}"
        case .enterRoomFilled: return "\u{f4c3}"
        case .enterRoomLight: return "\u{f4c4}"
        case .enterRoomRegular: return "\u{f4c5}"
        case .eraserBold: return "\u{f4c6}"
        case .eraserFilled: return "\u{f4c7}"
        case .eraserLight: return "\u{f4c8}"
        case .eraserRegular: return "\u{f4c9}"
        case .errorLegacyBadgeFilled: return "\u{f4ca}"
        case .errorLegacyBold: return "\u{f4cb}"
        case .errorLegacyFilled: return "\u{f4cc}"
        case .errorLegacyLight: return "\u{f4cd}"
        case .errorLegacyRegular: return "\u{f4ce}"
        case .ethernetBold: return "\u{f4cf}"
        case .ethernetFilled: return "\u{f4d0}"
        case .ethernetLight: return "\u{f4d1}"
        case .ethernetRegular: return "\u{f4d2}"
        case .exchangeBold: return "\u{f4d3}"
        case .exchangeLight: return "\u{f4d4}"
        case .exchangeRegular: return "\u{f4d5}"
        case .exclamationBold: return "\u{f4d6}"
        case .exclamationLight: return "\u{f4d7}"
        case .exclamationRegular: return "\u{f4d8}"
        case .excludeBold: return "\u{f4d9}"
        case .excludeLight: return "\u{f4da}"
        case .excludeRegular: return "\u{f4db}"
        case .existingTargetGroupBold: return "\u{f4dc}"
        case .existingTargetGroupLight: return "\u{f4dd}"
        case .existingTargetGroupRegular: return "\u{f4de}"
        case .exitRoomBold: return "\u{f4df}"
        case .exitRoomLight: return "\u{f4e0}"
        case .exitRoomRegular: return "\u{f4e1}"
        case .exploreBold: return "\u{f4e2}"
        case .exploreLight: return "\u{f4e3}"
        case .exploreRegular: return "\u{f4e4}"
        case .exportBold: return "\u{f4e5}"
        case .exportLight: return "\u{f4e6}"
        case .exportRegular: return "\u{f4e7}"
        case .extensionMobilityBold: return "\u{f4e8}"
        case .extensionMobilityLight: return "\u{f4e9}"
        case .extensionMobilityRegular: return "\u{f4ea}"
        case .externalMessageBold: return "\u{f4eb}"
        case .externalMessageLight: return "\u{f4ec}"
        case .externalMessageRegular: return "\u{f4ed}"
        case .externalUserBold: return "\u{f4ee}"
        case .externalUserLight: return "\u{f4ef}"
        case .externalUserRegular: return "\u{f4f0}"
        case .familyFontBold: return "\u{f4f1}"
        case .familyFontLight: return "\u{f4f2}"
        case .familyFontRegular: return "\u{f4f3}"
        case .fastForwardBold: return "\u{f4f4}"
        case .fastForwardLight: return "\u{f4f5}"
        case .fastForwardRegular: return "\u{f4f6}"
        case .favoriteBold: return "\u{f4f7}"
        case .favoriteFilled: return "\u{f4f8}"
        case .favoriteLight: return "\u{f4f9}"
        case .favoriteRegular: return "\u{f4fa}"
        case .favoritesBold: return "\u{f4fb}"
        case .favoritesFilled: return "\u{f4fc}"
        case .favoritesLight: return "\u{f4fd}"
        case .favoritesRegular: return "\u{f4fe}"
        case .fbwBold: return "\u{f4ff}"
        case .fbwFilled: return "\u{f500}"
        case .fbwLight: return "\u{f501}"
        case .fbwRegular: return "\u{f502}"
        case .ffwBold: return "\u{f503}"
        case .ffwFilled: return "\u{f504}"
        case .ffwLight: return "\u{f505}"
        case .ffwRegular: return "\u{f506}"
        case .fileAnalysisBold: return "\u{f507}"
        case .fileAnalysisFilled: return "\u{f508}"
        case .fileAnalysisLight: return "\u{f509}"
        case .fileAnalysisRegular: return "\u{f50a}"
        case .fileAnnotationBold: return "\u{f50b}"
        case .fileAnnotationFilled: return "\u{f50c}"
        case .fileAnnotationLight: return "\u{f50d}"
        case .fileAnnotationRegular: return "\u{f50e}"
        case .fileAudioBold: return "\u{f50f}"
        case .fileAudioFilled: return "\u{f510}"
        case .fileAudioLight: return "\u{f511}"
        case .fileAudioRegular: return "\u{f512}"
        case .fileBugBold: return "\u{f513}"
        case .fileBugFilled: return "\u{f514}"
        case .fileBugLight: return "\u{f515}"
        case .fileBugRegular: return "\u{f516}"
        case .fileCodeBold: return "\u{f517}"
        case .fileCodeFilled: return "\u{f518}"
        case .fileCodeLight: return "\u{f519}"
        case .fileCodeRegular: return "\u{f51a}"
        case .fileDashboardBold: return "\u{f51b}"
        case .fileDashboardFilled: return "\u{f51c}"
        case .fileDashboardLight: return "\u{f51d}"
        case .fileDashboardRegular: return "\u{f51e}"
        case .fileExcelBold: return "\u{f51f}"
        case .fileExcelFilled: return "\u{f520}"
        case .fileExcelLight: return "\u{f521}"
        case .fileExcelRegular: return "\u{f522}"
        case .fileGraphBold: return "\u{f523}"
        case .fileGraphFilled: return "\u{f524}"
        case .fileGraphLight: return "\u{f525}"
        case .fileGraphRegular: return "\u{f526}"
        case .fileImageBold: return "\u{f527}"
        case .fileImageFilled: return "\u{f528}"
        case .fileImageLight: return "\u{f529}"
        case .fileImageNoneBold: return "\u{f52a}"
        case .fileImageNoneLight: return "\u{f52b}"
        case .fileImageNoneRegular: return "\u{f52c}"
        case .fileImageRegular: return "\u{f52d}"
        case .fileKeynoteBold: return "\u{f52e}"
        case .fileKeynoteFilled: return "\u{f52f}"
        case .fileKeynoteLight: return "\u{f530}"
        case .fileKeynoteRegular: return "\u{f531}"
        case .fileLockedBold: return "\u{f532}"
        case .fileLockedFilled: return "\u{f533}"
        case .fileLockedLight: return "\u{f534}"
        case .fileLockedRegular: return "\u{f535}"
        case .fileMissingBold: return "\u{f536}"
        case .fileMissingFilled: return "\u{f537}"
        case .fileMissingLight: return "\u{f538}"
        case .fileMissingRegular: return "\u{f539}"
        case .fileMusicBold: return "\u{f53a}"
        case .fileMusicFilled: return "\u{f53b}"
        case .fileMusicLight: return "\u{f53c}"
        case .fileMusicRegular: return "\u{f53d}"
        case .fileOnenoteBold: return "\u{f53e}"
        case .fileOnenoteFilled: return "\u{f53f}"
        case .fileOnenoteLight: return "\u{f540}"
        case .fileOnenoteRegular: return "\u{f541}"
        case .filePdfBold: return "\u{f542}"
        case .filePdfFilled: return "\u{f543}"
        case .filePdfLight: return "\u{f544}"
        case .filePdfRegular: return "\u{f545}"
        case .filePowerpointBold: return "\u{f546}"
        case .filePowerpointFilled: return "\u{f547}"
        case .filePowerpointLight: return "\u{f548}"
        case .filePowerpointRegular: return "\u{f549}"
        case .fileSpreadsheetBold: return "\u{f54a}"
        case .fileSpreadsheetFilled: return "\u{f54b}"
        case .fileSpreadsheetLight: return "\u{f54c}"
        case .fileSpreadsheetRegular: return "\u{f54d}"
        case .fileTextBold: return "\u{f54e}"
        case .fileTextFilled: return "\u{f54f}"
        case .fileTextLight: return "\u{f550}"
        case .fileTextRegular: return "\u{f551}"
        case .fileThreeDBold: return "\u{f552}"
        case .fileThreeDFilled: return "\u{f553}"
        case .fileThreeDLight: return "\u{f554}"
        case .fileThreeDRegular: return "\u{f555}"
        case .fileVectorBold: return "\u{f556}"
        case .fileVectorFilled: return "\u{f557}"
        case .fileVectorLight: return "\u{f558}"
        case .fileVectorRegular: return "\u{f559}"
        case .fileVideoBold: return "\u{f55a}"
        case .fileVideoFilled: return "\u{f55b}"
        case .fileVideoLight: return "\u{f55c}"
        case .fileVideoRegular: return "\u{f55d}"
        case .fileWordBold: return "\u{f55e}"
        case .fileWordFilled: return "\u{f55f}"
        case .fileWordLight: return "\u{f560}"
        case .fileWordRegular: return "\u{f561}"
        case .fileZipBold: return "\u{f562}"
        case .fileZipFilled: return "\u{f563}"
        case .fileZipLight: return "\u{f564}"
        case .fileZipRegular: return "\u{f565}"
        case .filesBold: return "\u{f566}"
        case .filesFilled: return "\u{f567}"
        case .filesLight: return "\u{f568}"
        case .filesRegular: return "\u{f569}"
        case .fillColourBold: return "\u{f56a}"
        case .fillColourFilled: return "\u{f56b}"
        case .fillColourLight: return "\u{f56c}"
        case .fillColourRegular: return "\u{f56d}"
        case .filterBold: return "\u{f56e}"
        case .filterCircleBold: return "\u{f56f}"
        case .filterCircleFilled: return "\u{f570}"
        case .filterCircleLight: return "\u{f571}"
        case .filterCircleRegular: return "\u{f572}"
        case .filterLight: return "\u{f573}"
        case .filterRegular: return "\u{f574}"
        case .fitToWidthBold: return "\u{f575}"
        case .fitToWidthLight: return "\u{f576}"
        case .fitToWidthRegular: return "\u{f577}"
        case .fitToWindowExpandBold: return "\u{f578}"
        case .fitToWindowExpandLight: return "\u{f579}"
        case .fitToWindowExpandRegular: return "\u{f57a}"
        case .fitToWindowShrinkBold: return "\u{f57b}"
        case .fitToWindowShrinkLight: return "\u{f57c}"
        case .fitToWindowShrinkRegular: return "\u{f57d}"
        case .flagBold: return "\u{f57e}"
        case .flagCircleBold: return "\u{f57f}"
        case .flagCircleFilled: return "\u{f580}"
        case .flagCircleLight: return "\u{f581}"
        case .flagCircleRegular: return "\u{f582}"
        case .flagFilled: return "\u{f583}"
        case .flagLight: return "\u{f584}"
        case .flagRegular: return "\u{f585}"
        case .folderBold: return "\u{f586}"
        case .folderEditBold: return "\u{f587}"
        case .folderEditLight: return "\u{f588}"
        case .folderEditRegular: return "\u{f589}"
        case .folderLight: return "\u{f58a}"
        case .folderLockBold: return "\u{f58b}"
        case .folderLockLight: return "\u{f58c}"
        case .folderLockRegular: return "\u{f58d}"
        case .folderRegular: return "\u{f58e}"
        case .folderViewBold: return "\u{f58f}"
        case .folderViewLight: return "\u{f590}"
        case .folderViewRegular: return "\u{f591}"
        case .followUpBold: return "\u{f592}"
        case .followUpLight: return "\u{f593}"
        case .followUpRegular: return "\u{f594}"
        case .foodBold: return "\u{f595}"
        case .foodLight: return "\u{f596}"
        case .foodRegular: return "\u{f597}"
        case .formatBold: return "\u{f598}"
        case .formatDefaultAppBold: return "\u{f599}"
        case .formatDefaultAppFilled: return "\u{f59a}"
        case .formatDefaultAppLight: return "\u{f59b}"
        case .formatDefaultAppRegular: return "\u{f59c}"
        case .formatLight: return "\u{f59d}"
        case .formatPanelControlBarBold: return "\u{f59e}"
        case .formatPanelControlBarLight: return "\u{f59f}"
        case .formatPanelControlBarRegular: return "\u{f5a0}"
        case .formatPanelControlDownBold: return "\u{f5a1}"
        case .formatPanelControlDownLight: return "\u{f5a2}"
        case .formatPanelControlDownRegular: return "\u{f5a3}"
        case .formatPanelControlLeftBold: return "\u{f5a4}"
        case .formatPanelControlLeftLight: return "\u{f5a5}"
        case .formatPanelControlLeftRegular: return "\u{f5a6}"
        case .formatPanelControlRightBold: return "\u{f5a7}"
        case .formatPanelControlRightLight: return "\u{f5a8}"
        case .formatPanelControlRightRegular: return "\u{f5a9}"
        case .formatPanelControlUpBold: return "\u{f5aa}"
        case .formatPanelControlUpDownBold: return "\u{f5ab}"
        case .formatPanelControlUpDownLight: return "\u{f5ac}"
        case .formatPanelControlUpDownRegular: return "\u{f5ad}"
        case .formatPanelControlUpLight: return "\u{f5ae}"
        case .formatPanelControlUpRegular: return "\u{f5af}"
        case .formatRegular: return "\u{f5b0}"
        case .formatViewMixedBold: return "\u{f5b1}"
        case .formatViewMixedLight: return "\u{f5b2}"
        case .formatViewMixedRegular: return "\u{f5b3}"
        case .forwardMessageBold: return "\u{f5b4}"
        case .forwardMessageFilled: return "\u{f5b5}"
        case .forwardMessageLight: return "\u{f5b6}"
        case .forwardMessageRegular: return "\u{f5b7}"
        case .forwardTenSecBold: return "\u{f5b8}"
        case .forwardTenSecLight: return "\u{f5b9}"
        case .forwardTenSecRegular: return "\u{f5ba}"
        case .fourColumnBold: return "\u{f5bb}"
        case .fourColumnLight: return "\u{f5bc}"
        case .fourColumnRegular: return "\u{f5bd}"
        case .fourWayNavigationBold: return "\u{f5be}"
        case .fourWayNavigationLight: return "\u{f5bf}"
        case .fourWayNavigationRegular: return "\u{f5c0}"
        case .frequencyCappingBold: return "\u{f5c1}"
        case .frequencyCappingLight: return "\u{f5c2}"
        case .frequencyCappingRegular: return "\u{f5c3}"
        case .fulfillmentBold: return "\u{f5c4}"
        case .fulfillmentLight: return "\u{f5c5}"
        case .fulfillmentRegular: return "\u{f5c6}"
        case .fullscreenBold: return "\u{f5c7}"
        case .fullscreenExitBold: return "\u{f5c8}"
        case .fullscreenExitLight: return "\u{f5c9}"
        case .fullscreenExitRegular: return "\u{f5ca}"
        case .fullscreenLight: return "\u{f5cb}"
        case .fullscreenRegular: return "\u{f5cc}"
        case .genericDeviceVideoBadgeFilled: return "\u{f5cd}"
        case .genericDeviceVideoBold: return "\u{f5ce}"
        case .genericDeviceVideoFilled: return "\u{f5cf}"
        case .genericDeviceVideoLight: return "\u{f5d0}"
        case .genericDeviceVideoRegular: return "\u{f5d1}"
        case .gifBold: return "\u{f5d2}"
        case .gifFilled: return "\u{f5d3}"
        case .gifHorizontalBold: return "\u{f5d4}"
        case .gifHorizontalFilled: return "\u{f5d5}"
        case .gifHorizontalLight: return "\u{f5d6}"
        case .gifHorizontalRegular: return "\u{f5d7}"
        case .gifLight: return "\u{f5d8}"
        case .gifRegular: return "\u{f5d9}"
        case .giftBold: return "\u{f5da}"
        case .giftFilled: return "\u{f5db}"
        case .giftLight: return "\u{f5dc}"
        case .giftRegular: return "\u{f5dd}"
        case .googleMeetColored: return "\u{f5de}"
        case .greenLeafBold: return "\u{f5df}"
        case .greenLeafFilled: return "\u{f5e0}"
        case .greenLeafLight: return "\u{f5e1}"
        case .greenLeafRegular: return "\u{f5e2}"
        case .greenRoomBold: return "\u{f5e3}"
        case .greenRoomFilled: return "\u{f5e4}"
        case .greenRoomLight: return "\u{f5e5}"
        case .greenRoomRegular: return "\u{f5e6}"
        case .guestIssuerBold: return "\u{f5e7}"
        case .guestIssuerLight: return "\u{f5e8}"
        case .guestIssuerRegular: return "\u{f5e9}"
        case .guideBold: return "\u{f5ea}"
        case .guideLight: return "\u{f5eb}"
        case .guideRegular: return "\u{f5ec}"
        case .handPointerBold: return "\u{f5ed}"
        case .handPointerLight: return "\u{f5ee}"
        case .handPointerRegular: return "\u{f5ef}"
        case .handlerBold: return "\u{f5f0}"
        case .handlerHorizontalBold: return "\u{f5f1}"
        case .handlerHorizontalLight: return "\u{f5f2}"
        case .handlerHorizontalRegular: return "\u{f5f3}"
        case .handlerLight: return "\u{f5f4}"
        case .handlerRegular: return "\u{f5f5}"
        case .handsetAlertBold: return "\u{f5f6}"
        case .handsetAlertFilled: return "\u{f5f7}"
        case .handsetAlertLight: return "\u{f5f8}"
        case .handsetAlertRegular: return "\u{f5f9}"
        case .handsetBold: return "\u{f5fa}"
        case .handsetFilled: return "\u{f5fb}"
        case .handsetLight: return "\u{f5fc}"
        case .handsetMutedBold: return "\u{f5fd}"
        case .handsetMutedFilled: return "\u{f5fe}"
        case .handsetMutedLight: return "\u{f5ff}"
        case .handsetMutedRegular: return "\u{f600}"
        case .handsetRegular: return "\u{f601}"
        case .handshakeBold: return "\u{f602}"
        case .handshakeLight: return "\u{f603}"
        case .handshakeRegular: return "\u{f604}"
        case .headingOneBold: return "\u{f605}"
        case .headingOneLight: return "\u{f606}"
        case .headingOneRegular: return "\u{f607}"
        case .headingThreeBold: return "\u{f608}"
        case .headingThreeLight: return "\u{f609}"
        case .headingThreeRegular: return "\u{f60a}"
        case .headingTwoBold: return "\u{f60b}"
        case .headingTwoLight: return "\u{f60c}"
        case .headingTwoRegular: return "\u{f60d}"
        case .headphonesBold: return "\u{f60e}"
        case .headphonesFilled: return "\u{f60f}"
        case .headphonesLight: return "\u{f610}"
        case .headphonesMutedBold: return "\u{f611}"
        case .headphonesMutedFilled: return "\u{f612}"
        case .headphonesMutedLight: return "\u{f613}"
        case .headphonesMutedRegular: return "\u{f614}"
        case .headphonesRegular: return "\u{f615}"
        case .headsetAlertBold: return "\u{f616}"
        case .headsetAlertLight: return "\u{f617}"
        case .headsetAlertRegular: return "\u{f618}"
        case .headsetBold: return "\u{f619}"
        case .headsetFilled: return "\u{f61a}"
        case .headsetLight: return "\u{f61b}"
        case .headsetMutedBold: return "\u{f61c}"
        case .headsetMutedLight: return "\u{f61d}"
        case .headsetMutedRegular: return "\u{f61e}"
        case .headsetPrivateBold: return "\u{f61f}"
        case .headsetPrivateLight: return "\u{f620}"
        case .headsetPrivateRegular: return "\u{f621}"
        case .headsetRegular: return "\u{f622}"
        case .hearingBold: return "\u{f623}"
        case .hearingImpairedBold: return "\u{f624}"
        case .hearingImpairedLight: return "\u{f625}"
        case .hearingImpairedRegular: return "\u{f626}"
        case .hearingLight: return "\u{f627}"
        case .hearingRegular: return "\u{f628}"
        case .helpBold: return "\u{f629}"
        case .helpCircleBold: return "\u{f62a}"
        case .helpCircleFilled: return "\u{f62b}"
        case .helpCircleLight: return "\u{f62c}"
        case .helpCircleRegular: return "\u{f62d}"
        case .helpLight: return "\u{f62e}"
        case .helpRegular: return "\u{f62f}"
        case .helpdeskBold: return "\u{f630}"
        case .helpdeskFilled: return "\u{f631}"
        case .helpdeskLight: return "\u{f632}"
        case .helpdeskRegular: return "\u{f633}"
        case .hideBold: return "\u{f634}"
        case .hideFilled: return "\u{f635}"
        case .hideLight: return "\u{f636}"
        case .hideRegular: return "\u{f637}"
        case .homeBold: return "\u{f638}"
        case .homeFilled: return "\u{f639}"
        case .homeLight: return "\u{f63a}"
        case .homeRegular: return "\u{f63b}"
        case .horizontalLineBold: return "\u{f63c}"
        case .horizontalLineLight: return "\u{f63d}"
        case .horizontalLineRegular: return "\u{f63e}"
        case .hotelingBold: return "\u{f63f}"
        case .hotelingFilled: return "\u{f640}"
        case .hotelingLight: return "\u{f641}"
        case .hotelingRegular: return "\u{f642}"
        case .humidityBold: return "\u{f643}"
        case .humidityLight: return "\u{f644}"
        case .humidityRegular: return "\u{f645}"
        case .huntGroupBold: return "\u{f646}"
        case .huntGroupFilled: return "\u{f647}"
        case .huntGroupLight: return "\u{f648}"
        case .huntGroupRegular: return "\u{f649}"
        case .idleBold: return "\u{f64a}"
        case .idleFilled: return "\u{f64b}"
        case .idleLight: return "\u{f64c}"
        case .idleRegular: return "\u{f64d}"
        case .immediateBold: return "\u{f64e}"
        case .immediateFilled: return "\u{f64f}"
        case .immediateLight: return "\u{f650}"
        case .immediateRegular: return "\u{f651}"
        case .importBold: return "\u{f652}"
        case .importLight: return "\u{f653}"
        case .importRegular: return "\u{f654}"
        case .inCommonBold: return "\u{f655}"
        case .inCommonLight: return "\u{f656}"
        case .inCommonRegular: return "\u{f657}"
        case .includeBold: return "\u{f658}"
        case .includeLight: return "\u{f659}"
        case .includeRegular: return "\u{f65a}"
        case .incognitoBold: return "\u{f65b}"
        case .incognitoFilled: return "\u{f65c}"
        case .incognitoLight: return "\u{f65d}"
        case .incognitoRegular: return "\u{f65e}"
        case .incomingCallLegacyBold: return "\u{f65f}"
        case .incomingCallLegacyFilled: return "\u{f660}"
        case .incomingCallLegacyLight: return "\u{f661}"
        case .incomingCallLegacyRegular: return "\u{f662}"
        case .indentDecreaseBold: return "\u{f663}"
        case .indentDecreaseLight: return "\u{f664}"
        case .indentDecreaseRegular: return "\u{f665}"
        case .indentIncreaseBold: return "\u{f666}"
        case .indentIncreaseLight: return "\u{f667}"
        case .indentIncreaseRegular: return "\u{f668}"
        case .infoBadgeFilled: return "\u{f669}"
        case .infoCircleBold: return "\u{f66a}"
        case .infoCircleFilled: return "\u{f66b}"
        case .infoCircleLight: return "\u{f66c}"
        case .infoCircleRegular: return "\u{f66d}"
        case .infoCircleTwoBold: return "\u{f66e}"
        case .infoCircleTwoFilled: return "\u{f66f}"
        case .infoCircleTwoLight: return "\u{f670}"
        case .infoCircleTwoRegular: return "\u{f671}"
        case .inputBold: return "\u{f672}"
        case .inputDisconnectedBold: return "\u{f673}"
        case .inputDisconnectedLight: return "\u{f674}"
        case .inputDisconnectedRegular: return "\u{f675}"
        case .inputLight: return "\u{f676}"
        case .inputRegular: return "\u{f677}"
        case .instantScheduleBold: return "\u{f678}"
        case .instantScheduleFilled: return "\u{f679}"
        case .instantScheduleLight: return "\u{f67a}"
        case .instantScheduleRegular: return "\u{f67b}"
        case .integrationsBold: return "\u{f67c}"
        case .integrationsLight: return "\u{f67d}"
        case .integrationsRegular: return "\u{f67e}"
        case .intelligentRoutingBold: return "\u{f67f}"
        case .intelligentRoutingLight: return "\u{f680}"
        case .intelligentRoutingRegular: return "\u{f681}"
        case .invitedUserBold: return "\u{f682}"
        case .invitedUserLight: return "\u{f683}"
        case .invitedUserRegular: return "\u{f684}"
        case .italicBold: return "\u{f685}"
        case .italicFilled: return "\u{f686}"
        case .italicLight: return "\u{f687}"
        case .italicRegular: return "\u{f688}"
        case .joinAudioBold: return "\u{f689}"
        case .joinAudioFilled: return "\u{f68a}"
        case .joinAudioLight: return "\u{f68b}"
        case .joinAudioRegular: return "\u{f68c}"
        case .keepInTouchBold: return "\u{f68d}"
        case .keepInTouchFilled: return "\u{f68e}"
        case .keepInTouchLight: return "\u{f68f}"
        case .keepInTouchRegular: return "\u{f690}"
        case .keyboardBold: return "\u{f691}"
        case .keyboardCloseBold: return "\u{f692}"
        case .keyboardCloseLight: return "\u{f693}"
        case .keyboardCloseRegular: return "\u{f694}"
        case .keyboardLight: return "\u{f695}"
        case .keyboardRegular: return "\u{f696}"
        case .languageBold: return "\u{f697}"
        case .languageFilled: return "\u{f698}"
        case .languageLight: return "\u{f699}"
        case .languageRegular: return "\u{f69a}"
        case .laptopBold: return "\u{f69b}"
        case .laptopDisconnectedBold: return "\u{f69c}"
        case .laptopDisconnectedLight: return "\u{f69d}"
        case .laptopDisconnectedRegular: return "\u{f69e}"
        case .laptopFilled: return "\u{f69f}"
        case .laptopLight: return "\u{f6a0}"
        case .laptopRegular: return "\u{f6a1}"
        case .laserPointerBold: return "\u{f6a2}"
        case .laserPointerLight: return "\u{f6a3}"
        case .laserPointerRegular: return "\u{f6a4}"
        case .launchBold: return "\u{f6a5}"
        case .launchLight: return "\u{f6a6}"
        case .launchRegular: return "\u{f6a7}"
        case .layoutSideBySideVerticalBold: return "\u{f6a8}"
        case .layoutSideBySideVerticalFilled: return "\u{f6a9}"
        case .layoutSideBySideVerticalLight: return "\u{f6aa}"
        case .layoutSideBySideVerticalRegular: return "\u{f6ab}"
        case .leaveBreakoutSessionBold: return "\u{f6ac}"
        case .leaveBreakoutSessionLight: return "\u{f6ad}"
        case .leaveBreakoutSessionRegular: return "\u{f6ae}"
        case .leaveDeviceBold: return "\u{f6af}"
        case .leaveDeviceLight: return "\u{f6b0}"
        case .leaveDeviceRegular: return "\u{f6b1}"
        case .likeBold: return "\u{f6b2}"
        case .likeFilled: return "\u{f6b3}"
        case .likeLight: return "\u{f6b4}"
        case .likeRegular: return "\u{f6b5}"
        case .linkBold: return "\u{f6b6}"
        case .linkLight: return "\u{f6b7}"
        case .linkRegular: return "\u{f6b8}"
        case .listBulletedBold: return "\u{f6b9}"
        case .listBulletedLight: return "\u{f6ba}"
        case .listBulletedRegular: return "\u{f6bb}"
        case .listMenuBold: return "\u{f6bc}"
        case .listMenuLight: return "\u{f6bd}"
        case .listMenuRegular: return "\u{f6be}"
        case .listNumberedBold: return "\u{f6bf}"
        case .listNumberedLight: return "\u{f6c0}"
        case .listNumberedRegular: return "\u{f6c1}"
        case .liveBold: return "\u{f6c2}"
        case .liveFilled: return "\u{f6c3}"
        case .liveLight: return "\u{f6c4}"
        case .liveRegular: return "\u{f6c5}"
        case .locationBold: return "\u{f6c6}"
        case .locationFilled: return "\u{f6c7}"
        case .locationLight: return "\u{f6c8}"
        case .locationRegular: return "\u{f6c9}"
        case .longTextBoxBold: return "\u{f6ca}"
        case .longTextBoxLight: return "\u{f6cb}"
        case .longTextBoxRegular: return "\u{f6cc}"
        case .lowerHandBold: return "\u{f6cd}"
        case .lowerHandLight: return "\u{f6ce}"
        case .lowerHandRegular: return "\u{f6cf}"
        case .magicPenBold: return "\u{f6d0}"
        case .magicPenFilled: return "\u{f6d1}"
        case .magicPenLight: return "\u{f6d2}"
        case .magicPenRegular: return "\u{f6d3}"
        case .markAsUnreadBold: return "\u{f6d4}"
        case .markAsUnreadLight: return "\u{f6d5}"
        case .markAsUnreadRegular: return "\u{f6d6}"
        case .markdownBold: return "\u{f6d7}"
        case .markdownLight: return "\u{f6d8}"
        case .markdownRegular: return "\u{f6d9}"
        case .markerBold: return "\u{f6da}"
        case .markerFilled: return "\u{f6db}"
        case .markerLight: return "\u{f6dc}"
        case .markerRegular: return "\u{f6dd}"
        case .maximizeBold: return "\u{f6de}"
        case .maximizeLight: return "\u{f6df}"
        case .maximizeRegular: return "\u{f6e0}"
        case .mediaPlayerBold: return "\u{f6e1}"
        case .mediaPlayerLight: return "\u{f6e2}"
        case .mediaPlayerRegular: return "\u{f6e3}"
        case .mediaQualityGoodBold: return "\u{f6e4}"
        case .mediaQualityGoodFilled: return "\u{f6e5}"
        case .mediaQualityGoodLight: return "\u{f6e6}"
        case .mediaQualityGoodRegular: return "\u{f6e7}"
        case .mediaQualityPoorBold: return "\u{f6e8}"
        case .mediaQualityPoorFilled: return "\u{f6e9}"
        case .mediaQualityPoorLight: return "\u{f6ea}"
        case .mediaQualityPoorRegular: return "\u{f6eb}"
        case .mediaQualityUnstableBold: return "\u{f6ec}"
        case .mediaQualityUnstableFilled: return "\u{f6ed}"
        case .mediaQualityUnstableLight: return "\u{f6ee}"
        case .mediaQualityUnstableRegular: return "\u{f6ef}"
        case .meetBold: return "\u{f6f0}"
        case .meetEndBold: return "\u{f6f1}"
        case .meetEndLight: return "\u{f6f2}"
        case .meetEndRegular: return "\u{f6f3}"
        case .meetFilled: return "\u{f6f4}"
        case .meetLight: return "\u{f6f5}"
        case .meetRegular: return "\u{f6f6}"
        case .meetingSummaryBold: return "\u{f6f7}"
        case .meetingSummaryFilled: return "\u{f6f8}"
        case .meetingSummaryLight: return "\u{f6f9}"
        case .meetingSummaryRegular: return "\u{f6fa}"
        case .meetingsBold: return "\u{f6fb}"
        case .meetingsFilled: return "\u{f6fc}"
        case .meetingsFocusMonthBold: return "\u{f6fd}"
        case .meetingsFocusMonthLight: return "\u{f6fe}"
        case .meetingsFocusMonthRegular: return "\u{f6ff}"
        case .meetingsFocusOneDayBold: return "\u{f700}"
        case .meetingsFocusOneDayLight: return "\u{f701}"
        case .meetingsFocusOneDayRegular: return "\u{f702}"
        case .meetingsFocusThreeDayBold: return "\u{f703}"
        case .meetingsFocusThreeDayLight: return "\u{f704}"
        case .meetingsFocusThreeDayRegular: return "\u{f705}"
        case .meetingsFocusUpcomingBold: return "\u{f706}"
        case .meetingsFocusUpcomingLight: return "\u{f707}"
        case .meetingsFocusUpcomingRegular: return "\u{f708}"
        case .meetingsLight: return "\u{f709}"
        case .meetingsPresenceBadgeFilled: return "\u{f70a}"
        case .meetingsPresenceBold: return "\u{f70b}"
        case .meetingsPresenceFilled: return "\u{f70c}"
        case .meetingsPresenceLight: return "\u{f70d}"
        case .meetingsPresenceRegular: return "\u{f70e}"
        case .meetingsRegular: return "\u{f70f}"
        case .meetingsTeamBold: return "\u{f710}"
        case .meetingsTeamFilled: return "\u{f711}"
        case .meetingsTeamLight: return "\u{f712}"
        case .meetingsTeamNewBold: return "\u{f713}"
        case .meetingsTeamNewLight: return "\u{f714}"
        case .meetingsTeamNewRegular: return "\u{f715}"
        case .meetingsTeamRegular: return "\u{f716}"
        case .mentionBold: return "\u{f717}"
        case .mentionLight: return "\u{f718}"
        case .mentionRegular: return "\u{f719}"
        case .messageQueingBold: return "\u{f71a}"
        case .messageQueingLight: return "\u{f71b}"
        case .messageQueingRegular: return "\u{f71c}"
        case .microphoneBold: return "\u{f71d}"
        case .microphoneFilled: return "\u{f71e}"
        case .microphoneHardMutedBold: return "\u{f71f}"
        case .microphoneHardMutedCircleFilled: return "\u{f720}"
        case .microphoneHardMutedLight: return "\u{f721}"
        case .microphoneHardMutedRegular: return "\u{f722}"
        case .microphoneLight: return "\u{f723}"
        case .microphoneMusicModeBold: return "\u{f724}"
        case .microphoneMusicModeLight: return "\u{f725}"
        case .microphoneMusicModeOnBold: return "\u{f726}"
        case .microphoneMusicModeOnLight: return "\u{f727}"
        case .microphoneMusicModeOnRegular: return "\u{f728}"
        case .microphoneMusicModeRegular: return "\u{f729}"
        case .microphoneMutedBold: return "\u{f72a}"
        case .microphoneMutedCircleFilled: return "\u{f72b}"
        case .microphoneMutedFilled: return "\u{f72c}"
        case .microphoneMutedLight: return "\u{f72d}"
        case .microphoneMutedRegular: return "\u{f72e}"
        case .microphoneOnBold: return "\u{f72f}"
        case .microphoneOnLight: return "\u{f730}"
        case .microphoneOnRegular: return "\u{f731}"
        case .microphoneOptAllBold: return "\u{f732}"
        case .microphoneOptAllLight: return "\u{f733}"
        case .microphoneOptAllMutedBold: return "\u{f734}"
        case .microphoneOptAllMutedLight: return "\u{f735}"
        case .microphoneOptAllMutedRegular: return "\u{f736}"
        case .microphoneOptAllOnBold: return "\u{f737}"
        case .microphoneOptAllOnLight: return "\u{f738}"
        case .microphoneOptAllOnRegular: return "\u{f739}"
        case .microphoneOptAllRegular: return "\u{f73a}"
        case .microphoneOptMeBold: return "\u{f73b}"
        case .microphoneOptMeLight: return "\u{f73c}"
        case .microphoneOptMeMutedBold: return "\u{f73d}"
        case .microphoneOptMeMutedLight: return "\u{f73e}"
        case .microphoneOptMeMutedRegular: return "\u{f73f}"
        case .microphoneOptMeOnBold: return "\u{f740}"
        case .microphoneOptMeOnLight: return "\u{f741}"
        case .microphoneOptMeOnRegular: return "\u{f742}"
        case .microphoneOptMeRegular: return "\u{f743}"
        case .microphoneRegular: return "\u{f744}"
        case .mindMapBold: return "\u{f745}"
        case .mindMapLight: return "\u{f746}"
        case .mindMapRegular: return "\u{f747}"
        case .minimizeBold: return "\u{f748}"
        case .minimizeLight: return "\u{f749}"
        case .minimizeRegular: return "\u{f74a}"
        case .minusBold: return "\u{f74b}"
        case .minusLight: return "\u{f74c}"
        case .minusRegular: return "\u{f74d}"
        case .mirrorBold: return "\u{f74e}"
        case .mirrorFilled: return "\u{f74f}"
        case .mirrorLight: return "\u{f750}"
        case .mirrorRegular: return "\u{f751}"
        case .mmsFilled: return "\u{f752}"
        case .moderatorBold: return "\u{f753}"
        case .moderatorLight: return "\u{f754}"
        case .moderatorRegular: return "\u{f755}"
        case .monitoringBold: return "\u{f756}"
        case .monitoringLight: return "\u{f757}"
        case .monitoringRegular: return "\u{f758}"
        case .monthlyRecurringScheduleNodeBold: return "\u{f759}"
        case .monthlyRecurringScheduleNodeLight: return "\u{f75a}"
        case .monthlyRecurringScheduleNodeRegular: return "\u{f75b}"
        case .moreAdrBold: return "\u{f75c}"
        case .moreAdrLight: return "\u{f75d}"
        case .moreAdrRegular: return "\u{f75e}"
        case .moreBold: return "\u{f75f}"
        case .moreCircleBold: return "\u{f760}"
        case .moreCircleFilled: return "\u{f761}"
        case .moreCircleLight: return "\u{f762}"
        case .moreCircleRegular: return "\u{f763}"
        case .moreLight: return "\u{f764}"
        case .moreRegular: return "\u{f765}"
        case .mouseCursorBold: return "\u{f766}"
        case .mouseCursorLight: return "\u{f767}"
        case .mouseCursorRegular: return "\u{f768}"
        case .moveCallInAdrBold: return "\u{f769}"
        case .moveCallInAdrLight: return "\u{f76a}"
        case .moveCallInAdrRegular: return "\u{f76b}"
        case .moveCallInIphBold: return "\u{f76c}"
        case .moveCallInIphLight: return "\u{f76d}"
        case .moveCallInIphRegular: return "\u{f76e}"
        case .moveCallInLaptopBold: return "\u{f76f}"
        case .moveCallInLaptopLight: return "\u{f770}"
        case .moveCallInLaptopRegular: return "\u{f771}"
        case .moveCallInOutAdrBold: return "\u{f772}"
        case .moveCallInOutAdrLight: return "\u{f773}"
        case .moveCallInOutAdrRegular: return "\u{f774}"
        case .moveCallInOutIphBold: return "\u{f775}"
        case .moveCallInOutIphLight: return "\u{f776}"
        case .moveCallInOutIphRegular: return "\u{f777}"
        case .moveCallInTabletBold: return "\u{f778}"
        case .moveCallInTabletLight: return "\u{f779}"
        case .moveCallInTabletRegular: return "\u{f77a}"
        case .moveCallOutAdrBold: return "\u{f77b}"
        case .moveCallOutAdrLight: return "\u{f77c}"
        case .moveCallOutAdrRegular: return "\u{f77d}"
        case .moveCallOutIphBold: return "\u{f77e}"
        case .moveCallOutIphLight: return "\u{f77f}"
        case .moveCallOutIphRegular: return "\u{f780}"
        case .moveCallOutLaptopBold: return "\u{f781}"
        case .moveCallOutLaptopLight: return "\u{f782}"
        case .moveCallOutLaptopRegular: return "\u{f783}"
        case .moveCallOutTabletBold: return "\u{f784}"
        case .moveCallOutTabletLight: return "\u{f785}"
        case .moveCallOutTabletRegular: return "\u{f786}"
        case .moveToScreenBold: return "\u{f787}"
        case .moveToScreenLight: return "\u{f788}"
        case .moveToScreenRegular: return "\u{f789}"
        case .msTeamsColored: return "\u{f78a}"
        case .multilineChartBold: return "\u{f78b}"
        case .multilineChartFilled: return "\u{f78c}"
        case .multilineChartLight: return "\u{f78d}"
        case .multilineChartRegular: return "\u{f78e}"
        case .multimediaBold: return "\u{f78f}"
        case .multimediaFilled: return "\u{f790}"
        case .multimediaLight: return "\u{f791}"
        case .multimediaRegular: return "\u{f792}"
        case .multipledDevicesBold: return "\u{f793}"
        case .multipledDevicesLight: return "\u{f794}"
        case .multipledDevicesRegular: return "\u{f795}"
        case .musicModeCircleBold: return "\u{f796}"
        case .musicModeCircleFilled: return "\u{f797}"
        case .musicModeCircleLight: return "\u{f798}"
        case .musicModeCircleRegular: return "\u{f799}"
        case .musicNoteBold: return "\u{f79a}"
        case .musicNoteFilled: return "\u{f79b}"
        case .musicNoteLight: return "\u{f79c}"
        case .musicNoteRegular: return "\u{f79d}"
        case .muteOnEntryBold: return "\u{f79e}"
        case .muteOnEntryFilled: return "\u{f79f}"
        case .muteOnEntryLight: return "\u{f7a0}"
        case .muteOnEntryRegular: return "\u{f7a1}"
        case .newManagerBold: return "\u{f7a2}"
        case .newManagerLight: return "\u{f7a3}"
        case .newManagerRegular: return "\u{f7a4}"
        case .newTitleBold: return "\u{f7a5}"
        case .newTitleLight: return "\u{f7a6}"
        case .newTitleRegular: return "\u{f7a7}"
        case .newVoicemailBold: return "\u{f7a8}"
        case .newVoicemailLight: return "\u{f7a9}"
        case .newVoicemailRegular: return "\u{f7aa}"
        case .newWhiteboardBold: return "\u{f7ab}"
        case .newWhiteboardLight: return "\u{f7ac}"
        case .newWhiteboardRegular: return "\u{f7ad}"
        case .nextBold: return "\u{f7ae}"
        case .nextLight: return "\u{f7af}"
        case .nextRegular: return "\u{f7b0}"
        case .noDevicesBold: return "\u{f7b1}"
        case .noDevicesLight: return "\u{f7b2}"
        case .noDevicesRegular: return "\u{f7b3}"
        case .noiseDetectedCanceledFilled: return "\u{f7b4}"
        case .noiseDetectedFilled: return "\u{f7b5}"
        case .noiseNoneCanceledFilled: return "\u{f7b6}"
        case .noiseNoneFilled: return "\u{f7b7}"
        case .noiseRemovalBold: return "\u{f7b8}"
        case .noiseRemovalLight: return "\u{f7b9}"
        case .noiseRemovalRegular: return "\u{f7ba}"
        case .noteBold: return "\u{f7bb}"
        case .noteLight: return "\u{f7bc}"
        case .notePptBold: return "\u{f7bd}"
        case .notePptLight: return "\u{f7be}"
        case .notePptRegular: return "\u{f7bf}"
        case .noteRegular: return "\u{f7c0}"
        case .notesBold: return "\u{f7c1}"
        case .notesFilled: return "\u{f7c2}"
        case .notesLight: return "\u{f7c3}"
        case .notesRegular: return "\u{f7c4}"
        case .numberBold: return "\u{f7c5}"
        case .numberLight: return "\u{f7c6}"
        case .numberRegular: return "\u{f7c7}"
        case .oldRemoteBold: return "\u{f7c8}"
        case .oldRemoteLight: return "\u{f7c9}"
        case .oldRemoteRegular: return "\u{f7ca}"
        case .oldTouchBold: return "\u{f7cb}"
        case .oldTouchLight: return "\u{f7cc}"
        case .oldTouchRegular: return "\u{f7cd}"
        case .oneColumnBold: return "\u{f7ce}"
        case .oneColumnLight: return "\u{f7cf}"
        case .oneColumnRegular: return "\u{f7d0}"
        case .oneTimeBold: return "\u{f7d1}"
        case .oneTimeLight: return "\u{f7d2}"
        case .oneTimeRegular: return "\u{f7d3}"
        case .openInFolderBold: return "\u{f7d4}"
        case .openInFolderLight: return "\u{f7d5}"
        case .openInFolderRegular: return "\u{f7d6}"
        case .openPagesBold: return "\u{f7d7}"
        case .openPagesLight: return "\u{f7d8}"
        case .openPagesRegular: return "\u{f7d9}"
        case .otherNumberBold: return "\u{f7da}"
        case .otherNumberFilled: return "\u{f7db}"
        case .otherNumberLight: return "\u{f7dc}"
        case .otherNumberRegular: return "\u{f7dd}"
        case .otherNumberWarningBold: return "\u{f7de}"
        case .otherNumberWarningLight: return "\u{f7df}"
        case .otherNumberWarningRegular: return "\u{f7e0}"
        case .outgoingCallLegacyBold: return "\u{f7e1}"
        case .outgoingCallLegacyFilled: return "\u{f7e2}"
        case .outgoingCallLegacyLight: return "\u{f7e3}"
        case .outgoingCallLegacyRegular: return "\u{f7e4}"
        case .overflowLeftBold: return "\u{f7e5}"
        case .overflowLeftLight: return "\u{f7e6}"
        case .overflowLeftRegular: return "\u{f7e7}"
        case .overflowRightBold: return "\u{f7e8}"
        case .overflowRightLight: return "\u{f7e9}"
        case .overflowRightRegular: return "\u{f7ea}"
        case .pairedCameraBold: return "\u{f7eb}"
        case .pairedCameraLight: return "\u{f7ec}"
        case .pairedCameraRegular: return "\u{f7ed}"
        case .pairedDeviceBold: return "\u{f7ee}"
        case .pairedDeviceLight: return "\u{f7ef}"
        case .pairedDeviceRegular: return "\u{f7f0}"
        case .pairedHandsetBold: return "\u{f7f1}"
        case .pairedHandsetLight: return "\u{f7f2}"
        case .pairedHandsetRegular: return "\u{f7f3}"
        case .pairingBold: return "\u{f7f4}"
        case .pairingLight: return "\u{f7f5}"
        case .pairingRegular: return "\u{f7f6}"
        case .parkedBold: return "\u{f7f7}"
        case .parkedFilled: return "\u{f7f8}"
        case .parkedLight: return "\u{f7f9}"
        case .parkedRegular: return "\u{f7fa}"
        case .parseBold: return "\u{f7fb}"
        case .parseLight: return "\u{f7fc}"
        case .parseRegular: return "\u{f7fd}"
        case .partialBold: return "\u{f7fe}"
        case .partialLight: return "\u{f7ff}"
        case .partialRegular: return "\u{f800}"
        case .participantAddBold: return "\u{f801}"
        case .participantAddLight: return "\u{f802}"
        case .participantAddRegular: return "\u{f803}"
        case .participantBlockedBold: return "\u{f804}"
        case .participantBlockedLight: return "\u{f805}"
        case .participantBlockedRegular: return "\u{f806}"
        case .participantBold: return "\u{f807}"
        case .participantFilled: return "\u{f808}"
        case .participantLight: return "\u{f809}"
        case .participantListBold: return "\u{f80a}"
        case .participantListFilled: return "\u{f80b}"
        case .participantListLight: return "\u{f80c}"
        case .participantListRegular: return "\u{f80d}"
        case .participantRegular: return "\u{f80e}"
        case .participantRemoveBold: return "\u{f80f}"
        case .participantRemoveLight: return "\u{f810}"
        case .participantRemoveRegular: return "\u{f811}"
        case .participantUnknownBold: return "\u{f812}"
        case .participantUnknownLight: return "\u{f813}"
        case .participantUnknownRegular: return "\u{f814}"
        case .passMouseBold: return "\u{f815}"
        case .passMouseLight: return "\u{f816}"
        case .passMouseRegular: return "\u{f817}"
        case .pauseBadgeFilled: return "\u{f818}"
        case .pauseBold: return "\u{f819}"
        case .pauseFilled: return "\u{f81a}"
        case .pauseLight: return "\u{f81b}"
        case .pauseRegular: return "\u{f81c}"
        case .penBold: return "\u{f81d}"
        case .penFilled: return "\u{f81e}"
        case .penLight: return "\u{f81f}"
        case .penRegular: return "\u{f820}"
        case .peopleAddBold: return "\u{f821}"
        case .peopleAddFilled: return "\u{f822}"
        case .peopleAddLight: return "\u{f823}"
        case .peopleAddRegular: return "\u{f824}"
        case .peopleBold: return "\u{f825}"
        case .peopleCircleBold: return "\u{f826}"
        case .peopleCircleFilled: return "\u{f827}"
        case .peopleCircleLight: return "\u{f828}"
        case .peopleCircleRegular: return "\u{f829}"
        case .peopleFilled: return "\u{f82a}"
        case .peopleInsightsBold: return "\u{f82b}"
        case .peopleInsightsFilled: return "\u{f82c}"
        case .peopleInsightsLight: return "\u{f82d}"
        case .peopleInsightsRegular: return "\u{f82e}"
        case .peopleLight: return "\u{f82f}"
        case .peopleRegular: return "\u{f830}"
        case .phoneAlertBold: return "\u{f831}"
        case .phoneAlertLight: return "\u{f832}"
        case .phoneAlertRegular: return "\u{f833}"
        case .phoneBadgeFilled: return "\u{f834}"
        case .phoneBold: return "\u{f835}"
        case .phoneFilled: return "\u{f836}"
        case .phoneLight: return "\u{f837}"
        case .phoneMutedBold: return "\u{f838}"
        case .phoneMutedLight: return "\u{f839}"
        case .phoneMutedRegular: return "\u{f83a}"
        case .phonePrivateBold: return "\u{f83b}"
        case .phonePrivateLight: return "\u{f83c}"
        case .phonePrivateRegular: return "\u{f83d}"
        case .phoneRegular: return "\u{f83e}"
        case .phoneReplyAllBold: return "\u{f83f}"
        case .phoneReplyAllLight: return "\u{f840}"
        case .phoneReplyAllRegular: return "\u{f841}"
        case .phoneReplyBold: return "\u{f842}"
        case .phoneReplyLight: return "\u{f843}"
        case .phoneReplyRegular: return "\u{f844}"
        case .pickerBold: return "\u{f845}"
        case .pickerLight: return "\u{f846}"
        case .pickerRegular: return "\u{f847}"
        case .pieChartBold: return "\u{f848}"
        case .pieChartFilled: return "\u{f849}"
        case .pieChartLight: return "\u{f84a}"
        case .pieChartRegular: return "\u{f84b}"
        case .pinBold: return "\u{f84c}"
        case .pinFilled: return "\u{f84d}"
        case .pinLight: return "\u{f84e}"
        case .pinListActivityBold: return "\u{f84f}"
        case .pinListActivityLight: return "\u{f850}"
        case .pinListActivityRegular: return "\u{f851}"
        case .pinListBold: return "\u{f852}"
        case .pinListLight: return "\u{f853}"
        case .pinListRegular: return "\u{f854}"
        case .pinMutedBold: return "\u{f855}"
        case .pinMutedFilled: return "\u{f856}"
        case .pinMutedLight: return "\u{f857}"
        case .pinMutedRegular: return "\u{f858}"
        case .pinRegular: return "\u{f859}"
        case .pipBold: return "\u{f85a}"
        case .pipEnterBold: return "\u{f85b}"
        case .pipEnterLight: return "\u{f85c}"
        case .pipEnterRegular: return "\u{f85d}"
        case .pipExitBold: return "\u{f85e}"
        case .pipExitLight: return "\u{f85f}"
        case .pipExitRegular: return "\u{f860}"
        case .pipFilled: return "\u{f861}"
        case .pipLight: return "\u{f862}"
        case .pipRegular: return "\u{f863}"
        case .placeholderBold: return "\u{f864}"
        case .placeholderFilled: return "\u{f865}"
        case .placeholderLight: return "\u{f866}"
        case .placeholderRegular: return "\u{f867}"
        case .playBold: return "\u{f868}"
        case .playCircleBold: return "\u{f869}"
        case .playCircleFilled: return "\u{f86a}"
        case .playCircleLight: return "\u{f86b}"
        case .playCircleRegular: return "\u{f86c}"
        case .playFilled: return "\u{f86d}"
        case .playLight: return "\u{f86e}"
        case .playRegular: return "\u{f86f}"
        case .plugAcBold: return "\u{f870}"
        case .plugAcLight: return "\u{f871}"
        case .plugAcRegular: return "\u{f872}"
        case .plusBold: return "\u{f873}"
        case .plusCircleBold: return "\u{f874}"
        case .plusCircleFilled: return "\u{f875}"
        case .plusCircleLight: return "\u{f876}"
        case .plusCircleRegular: return "\u{f877}"
        case .plusLight: return "\u{f878}"
        case .plusRegular: return "\u{f879}"
        case .pmrBold: return "\u{f87a}"
        case .pmrFilled: return "\u{f87b}"
        case .pmrLight: return "\u{f87c}"
        case .pmrRegular: return "\u{f87d}"
        case .pollBold: return "\u{f87e}"
        case .pollFilled: return "\u{f87f}"
        case .pollLight: return "\u{f880}"
        case .pollRegular: return "\u{f881}"
        case .popInBold: return "\u{f882}"
        case .popInLight: return "\u{f883}"
        case .popInRegular: return "\u{f884}"
        case .popOutBold: return "\u{f885}"
        case .popOutLight: return "\u{f886}"
        case .popOutRegular: return "\u{f887}"
        case .popUpBold: return "\u{f888}"
        case .popUpLight: return "\u{f889}"
        case .popUpRegular: return "\u{f88a}"
        case .portraitLandscapeBold: return "\u{f88b}"
        case .portraitLandscapeLight: return "\u{f88c}"
        case .portraitLandscapeRegular: return "\u{f88d}"
        case .powerAcBold: return "\u{f88e}"
        case .powerAcLight: return "\u{f88f}"
        case .powerAcRegular: return "\u{f890}"
        case .powerBold: return "\u{f891}"
        case .powerLight: return "\u{f892}"
        case .powerRegular: return "\u{f893}"
        case .preHeaderBold: return "\u{f894}"
        case .preHeaderLight: return "\u{f895}"
        case .preHeaderRegular: return "\u{f896}"
        case .premiumBold: return "\u{f897}"
        case .premiumLight: return "\u{f898}"
        case .premiumRegular: return "\u{f899}"
        case .presentationBold: return "\u{f89a}"
        case .presentationLight: return "\u{f89b}"
        case .presentationRegular: return "\u{f89c}"
        case .preventDownloadBold: return "\u{f89d}"
        case .preventDownloadFilled: return "\u{f89e}"
        case .preventDownloadLight: return "\u{f89f}"
        case .preventDownloadRegular: return "\u{f8a0}"
        case .primaryParticipantBold: return "\u{f8a1}"
        case .primaryParticipantLight: return "\u{f8a2}"
        case .primaryParticipantRegular: return "\u{f8a3}"
        case .printBold: return "\u{f8a4}"
        case .printLight: return "\u{f8a5}"
        case .printRegular: return "\u{f8a6}"
        case .priorityBadgeFilled: return "\u{f8a7}"
        case .priorityCircleBold: return "\u{f8a8}"
        case .priorityCircleFilled: return "\u{f8a9}"
        case .priorityCircleLight: return "\u{f8aa}"
        case .priorityCircleRegular: return "\u{f8ab}"
        case .priorityCircleTwoBold: return "\u{f8ac}"
        case .priorityCircleTwoFilled: return "\u{f8ad}"
        case .priorityCircleTwoLight: return "\u{f8ae}"
        case .priorityCircleTwoRegular: return "\u{f8af}"
        case .privacyCircleBold: return "\u{f8b0}"
        case .privacyCircleFilled: return "\u{f8b1}"
        case .privacyCircleLight: return "\u{f8b2}"
        case .privacyCircleRegular: return "\u{f8b3}"
        case .privateBold: return "\u{f8b4}"
        case .privateCircleBold: return "\u{f8b5}"
        case .privateCircleFilled: return "\u{f8b6}"
        case .privateCircleLight: return "\u{f8b7}"
        case .privateCircleRegular: return "\u{f8b8}"
        case .privateLight: return "\u{f8b9}"
        case .privateMeetingBold: return "\u{f8ba}"
        case .privateMeetingLight: return "\u{f8bb}"
        case .privateMeetingRegular: return "\u{f8bc}"
        case .privateRegular: return "\u{f8bd}"
        case .productDemoBold: return "\u{f8be}"
        case .productDemoLight: return "\u{f8bf}"
        case .productDemoRegular: return "\u{f8c0}"
        case .proximityBold: return "\u{f8c1}"
        case .proximityLight: return "\u{f8c2}"
        case .proximityMutedBold: return "\u{f8c3}"
        case .proximityMutedLight: return "\u{f8c4}"
        case .proximityMutedRegular: return "\u{f8c5}"
        case .proximityRegular: return "\u{f8c6}"
        case .proximityVideoBold: return "\u{f8c7}"
        case .proximityVideoLight: return "\u{f8c8}"
        case .proximityVideoRegular: return "\u{f8c9}"
        case .ptoPresenceBold: return "\u{f8ca}"
        case .ptoPresenceFilled: return "\u{f8cb}"
        case .ptoPresenceLight: return "\u{f8cc}"
        case .ptoPresenceRegular: return "\u{f8cd}"
        case .pullCallBold: return "\u{f8ce}"
        case .pullCallFilled: return "\u{f8cf}"
        case .pullCallLight: return "\u{f8d0}"
        case .pullCallRegular: return "\u{f8d1}"
        case .qABold: return "\u{f8d2}"
        case .qALight: return "\u{f8d3}"
        case .qARegular: return "\u{f8d4}"
        case .qrCodeBold: return "\u{f8d5}"
        case .qrCodeLight: return "\u{f8d6}"
        case .qrCodeRegular: return "\u{f8d7}"
        case .qrCodeScanBold: return "\u{f8d8}"
        case .qrCodeScanLight: return "\u{f8d9}"
        case .qrCodeScanRegular: return "\u{f8da}"
        case .qualityBold: return "\u{f8db}"
        case .qualityLight: return "\u{f8dc}"
        case .qualityRegular: return "\u{f8dd}"
        case .queueContactBold: return "\u{f8de}"
        case .queueContactFilled: return "\u{f8df}"
        case .queueContactLight: return "\u{f8e0}"
        case .queueContactRegular: return "\u{f8e1}"
        case .quietBold: return "\u{f8e2}"
        case .quietHoursPresenceBold: return "\u{f8e3}"
        case .quietHoursPresenceFilled: return "\u{f8e4}"
        case .quietHoursPresenceLight: return "\u{f8e5}"
        case .quietHoursPresenceRegular: return "\u{f8e6}"
        case .quietLight: return "\u{f8e7}"
        case .quietRegular: return "\u{f8e8}"
        case .radioButtonGroupBold: return "\u{f8e9}"
        case .radioButtonGroupLight: return "\u{f8ea}"
        case .radioButtonGroupRegular: return "\u{f8eb}"
        case .raiseHandBold: return "\u{f8ec}"
        case .raiseHandCircleFilled: return "\u{f8ed}"
        case .raiseHandFilled: return "\u{f8ee}"
        case .raiseHandLight: return "\u{f8ef}"
        case .raiseHandRegular: return "\u{f8f0}"
        case .ramBold: return "\u{f8f1}"
        case .ramLight: return "\u{f8f2}"
        case .ramRegular: return "\u{f8f3}"
        case .reactionsBold: return "\u{f8f4}"
        case .reactionsFilled: return "\u{f8f5}"
        case .reactionsLight: return "\u{f8f6}"
        case .reactionsRegular: return "\u{f8f7}"
        case .reactivateBold: return "\u{f8f8}"
        case .reactivateLight: return "\u{f8f9}"
        case .reactivateRegular: return "\u{f8fa}"
        case .receiveVoiceBold: return "\u{f8fb}"
        case .receiveVoiceFilled: return "\u{f8fc}"
        case .receiveVoiceLight: return "\u{f8fd}"
        case .receiveVoiceRegular: return "\u{f8fe}"
        case .recentsBold: return "\u{f8ff}"
        case .recentsFilled: return "\u{f900}"
        case .recentsLight: return "\u{f901}"
        case .recentsPresenceBadgeFilled: return "\u{f902}"
        case .recentsPresenceBold: return "\u{f903}"
        case .recentsPresenceFilled: return "\u{f904}"
        case .recentsPresenceLight: return "\u{f905}"
        case .recentsPresenceRegular: return "\u{f906}"
        case .recentsRegular: return "\u{f907}"
        case .recordActiveBold: return "\u{f908}"
        case .recordActiveFilled: return "\u{f909}"
        case .recordActiveLight: return "\u{f90a}"
        case .recordActiveRegular: return "\u{f90b}"
        case .recordBold: return "\u{f90c}"
        case .recordFilled: return "\u{f90d}"
        case .recordLight: return "\u{f90e}"
        case .recordPausedBold: return "\u{f90f}"
        case .recordPausedFilled: return "\u{f910}"
        case .recordPausedLight: return "\u{f911}"
        case .recordPausedRegular: return "\u{f912}"
        case .recordRegular: return "\u{f913}"
        case .recurringBold: return "\u{f914}"
        case .recurringLight: return "\u{f915}"
        case .recurringOffBold: return "\u{f916}"
        case .recurringOffLight: return "\u{f917}"
        case .recurringOffRegular: return "\u{f918}"
        case .recurringRegular: return "\u{f919}"
        case .redialBold: return "\u{f91a}"
        case .redialLight: return "\u{f91b}"
        case .redialRegular: return "\u{f91c}"
        case .redoBold: return "\u{f91d}"
        case .redoLight: return "\u{f91e}"
        case .redoRegular: return "\u{f91f}"
        case .refreshBold: return "\u{f920}"
        case .refreshLight: return "\u{f921}"
        case .refreshRegular: return "\u{f922}"
        case .remoteDesktopControlBold: return "\u{f923}"
        case .remoteDesktopControlFilled: return "\u{f924}"
        case .remoteDesktopControlLight: return "\u{f925}"
        case .remoteDesktopControlRegular: return "\u{f926}"
        case .removeBold: return "\u{f927}"
        case .removeFilled: return "\u{f928}"
        case .removeLight: return "\u{f929}"
        case .removeRegular: return "\u{f92a}"
        case .replyBold: return "\u{f92b}"
        case .replyFilled: return "\u{f92c}"
        case .replyLight: return "\u{f92d}"
        case .replyListBold: return "\u{f92e}"
        case .replyListLight: return "\u{f92f}"
        case .replyListRegular: return "\u{f930}"
        case .replyPrivatelyBold: return "\u{f931}"
        case .replyPrivatelyLight: return "\u{f932}"
        case .replyPrivatelyRegular: return "\u{f933}"
        case .replyRegular: return "\u{f934}"
        case .resetBold: return "\u{f935}"
        case .resetLight: return "\u{f936}"
        case .resetRegular: return "\u{f937}"
        case .resizeCornerBold: return "\u{f938}"
        case .resizeCornerLight: return "\u{f939}"
        case .resizeCornerRegular: return "\u{f93a}"
        case .responsiveMobileBold: return "\u{f93b}"
        case .responsiveMobileLight: return "\u{f93c}"
        case .responsiveMobileRegular: return "\u{f93d}"
        case .restartBold: return "\u{f93e}"
        case .restartLight: return "\u{f93f}"
        case .restartRegular: return "\u{f940}"
        case .retrieveCallBold: return "\u{f941}"
        case .retrieveCallFilled: return "\u{f942}"
        case .retrieveCallLight: return "\u{f943}"
        case .retrieveCallRegular: return "\u{f944}"
        case .returnBold: return "\u{f945}"
        case .returnLight: return "\u{f946}"
        case .returnRegular: return "\u{f947}"
        case .rewindTenSecBold: return "\u{f948}"
        case .rewindTenSecLight: return "\u{f949}"
        case .rewindTenSecRegular: return "\u{f94a}"
        case .ringtoneBold: return "\u{f94b}"
        case .ringtoneLight: return "\u{f94c}"
        case .ringtoneRegular: return "\u{f94d}"
        case .roomCalendarBold: return "\u{f94e}"
        case .roomCalendarLight: return "\u{f94f}"
        case .roomCalendarRegular: return "\u{f950}"
        case .roomLightsBold: return "\u{f951}"
        case .roomLightsFilled: return "\u{f952}"
        case .roomLightsLight: return "\u{f953}"
        case .roomLightsRegular: return "\u{f954}"
        case .rotateContentBold: return "\u{f955}"
        case .rotateContentFilled: return "\u{f956}"
        case .rotateContentLight: return "\u{f957}"
        case .rotateContentRegular: return "\u{f958}"
        case .rssBold: return "\u{f959}"
        case .rssFilled: return "\u{f95a}"
        case .rssLight: return "\u{f95b}"
        case .rssRegular: return "\u{f95c}"
        case .ruleBasedBold: return "\u{f95d}"
        case .ruleBasedLight: return "\u{f95e}"
        case .ruleBasedRegular: return "\u{f95f}"
        case .runningApplicationBold: return "\u{f960}"
        case .runningApplicationFilled: return "\u{f961}"
        case .runningApplicationLight: return "\u{f962}"
        case .runningApplicationRegular: return "\u{f963}"
        case .saveBold: return "\u{f964}"
        case .saveLight: return "\u{f965}"
        case .saveRegular: return "\u{f966}"
        case .saveTranscriptBold: return "\u{f967}"
        case .saveTranscriptFilled: return "\u{f968}"
        case .saveTranscriptLight: return "\u{f969}"
        case .saveTranscriptRegular: return "\u{f96a}"
        case .scanBold: return "\u{f96b}"
        case .scanLight: return "\u{f96c}"
        case .scanRegular: return "\u{f96d}"
        case .scheduleSendBold: return "\u{f96e}"
        case .scheduleSendFilled: return "\u{f96f}"
        case .scheduleSendLight: return "\u{f970}"
        case .scheduleSendRegular: return "\u{f971}"
        case .scheduleWinnerBold: return "\u{f972}"
        case .scheduleWinnerFilled: return "\u{f973}"
        case .scheduleWinnerLight: return "\u{f974}"
        case .scheduleWinnerRegular: return "\u{f975}"
        case .schedulerAvailableBold: return "\u{f976}"
        case .schedulerAvailableLight: return "\u{f977}"
        case .schedulerAvailableRegular: return "\u{f978}"
        case .schedulerNotWorkingHoursBold: return "\u{f979}"
        case .schedulerNotWorkingHoursLight: return "\u{f97a}"
        case .schedulerNotWorkingHoursRegular: return "\u{f97b}"
        case .schedulerUnavailableBold: return "\u{f97c}"
        case .schedulerUnavailableLight: return "\u{f97d}"
        case .schedulerUnavailableRegular: return "\u{f97e}"
        case .schedulerUnknownBold: return "\u{f97f}"
        case .schedulerUnknownLight: return "\u{f980}"
        case .schedulerUnknownRegular: return "\u{f981}"
        case .screenshotBold: return "\u{f982}"
        case .screenshotDocBold: return "\u{f983}"
        case .screenshotDocFilled: return "\u{f984}"
        case .screenshotDocLight: return "\u{f985}"
        case .screenshotDocRegular: return "\u{f986}"
        case .screenshotLight: return "\u{f987}"
        case .screenshotRegular: return "\u{f988}"
        case .searchBold: return "\u{f989}"
        case .searchFilled: return "\u{f98a}"
        case .searchLight: return "\u{f98b}"
        case .searchRegular: return "\u{f98c}"
        case .secondaryArrowBold: return "\u{f98d}"
        case .secondaryArrowLight: return "\u{f98e}"
        case .secondaryArrowRegular: return "\u{f98f}"
        case .secureCallLockBold: return "\u{f990}"
        case .secureCallLockFilled: return "\u{f991}"
        case .secureCallLockLight: return "\u{f992}"
        case .secureCallLockRegular: return "\u{f993}"
        case .secureCallShieldBold: return "\u{f994}"
        case .secureCallShieldFilled: return "\u{f995}"
        case .secureCallShieldLight: return "\u{f996}"
        case .secureCallShieldRegular: return "\u{f997}"
        case .secureCircleBold: return "\u{f998}"
        case .secureCircleFilled: return "\u{f999}"
        case .secureCircleLight: return "\u{f99a}"
        case .secureCircleRegular: return "\u{f99b}"
        case .secureLockBold: return "\u{f99c}"
        case .secureLockFilled: return "\u{f99d}"
        case .secureLockLight: return "\u{f99e}"
        case .secureLockRegular: return "\u{f99f}"
        case .segmentExcludeFilled: return "\u{f9a0}"
        case .segmentFilterFilled: return "\u{f9a1}"
        case .segmentIncludeFilled: return "\u{f9a2}"
        case .selectAllBold: return "\u{f9a3}"
        case .selectAllFilled: return "\u{f9a4}"
        case .selectAllLight: return "\u{f9a5}"
        case .selectAllRegular: return "\u{f9a6}"
        case .selectionBold: return "\u{f9a7}"
        case .selectionLight: return "\u{f9a8}"
        case .selectionRegular: return "\u{f9a9}"
        case .sendBold: return "\u{f9aa}"
        case .sendFilled: return "\u{f9ab}"
        case .sendLight: return "\u{f9ac}"
        case .sendRegular: return "\u{f9ad}"
        case .sendVoiceBold: return "\u{f9ae}"
        case .sendVoiceFilled: return "\u{f9af}"
        case .sendVoiceLight: return "\u{f9b0}"
        case .sendVoiceRegular: return "\u{f9b1}"
        case .serverBold: return "\u{f9b2}"
        case .serverErrorBold: return "\u{f9b3}"
        case .serverErrorLight: return "\u{f9b4}"
        case .serverErrorRegular: return "\u{f9b5}"
        case .serverLight: return "\u{f9b6}"
        case .serverRegular: return "\u{f9b7}"
        case .servicesBold: return "\u{f9b8}"
        case .servicesLight: return "\u{f9b9}"
        case .servicesRegular: return "\u{f9ba}"
        case .setVariableBold: return "\u{f9bb}"
        case .setVariableLight: return "\u{f9bc}"
        case .setVariableRegular: return "\u{f9bd}"
        case .settingsBold: return "\u{f9be}"
        case .settingsFilled: return "\u{f9bf}"
        case .settingsLight: return "\u{f9c0}"
        case .settingsRegular: return "\u{f9c1}"
        case .setupAssistantBold: return "\u{f9c2}"
        case .setupAssistantLight: return "\u{f9c3}"
        case .setupAssistantRegular: return "\u{f9c4}"
        case .sftpBold: return "\u{f9c5}"
        case .sftpLight: return "\u{f9c6}"
        case .sftpRegular: return "\u{f9c7}"
        case .shapeCircleBold: return "\u{f9c8}"
        case .shapeCircleFilled: return "\u{f9c9}"
        case .shapeCircleLight: return "\u{f9ca}"
        case .shapeCircleMdFilled: return "\u{f9cb}"
        case .shapeCircleRegular: return "\u{f9cc}"
        case .shapeCircleSmFilled: return "\u{f9cd}"
        case .shapeDiagonalLineBold: return "\u{f9ce}"
        case .shapeDiagonalLineLight: return "\u{f9cf}"
        case .shapeDiagonalLineRegular: return "\u{f9d0}"
        case .shapeDiamondBold: return "\u{f9d1}"
        case .shapeDiamondFilled: return "\u{f9d2}"
        case .shapeDiamondLight: return "\u{f9d3}"
        case .shapeDiamondRegular: return "\u{f9d4}"
        case .shapeOvalBold: return "\u{f9d5}"
        case .shapeOvalLight: return "\u{f9d6}"
        case .shapeOvalRegular: return "\u{f9d7}"
        case .shapeSquareBold: return "\u{f9d8}"
        case .shapeSquareFilled: return "\u{f9d9}"
        case .shapeSquareLight: return "\u{f9da}"
        case .shapeSquareRegular: return "\u{f9db}"
        case .shapeTriangleBold: return "\u{f9dc}"
        case .shapeTriangleFilled: return "\u{f9dd}"
        case .shapeTriangleLight: return "\u{f9de}"
        case .shapeTriangleRegular: return "\u{f9df}"
        case .shapesBold: return "\u{f9e0}"
        case .shapesLight: return "\u{f9e1}"
        case .shapesRegular: return "\u{f9e2}"
        case .shareCNativeAdrBold: return "\u{f9e3}"
        case .shareCNativeAdrFilled: return "\u{f9e4}"
        case .shareCNativeAdrLight: return "\u{f9e5}"
        case .shareCNativeAdrRegular: return "\u{f9e6}"
        case .shareCNativeIphBold: return "\u{f9e7}"
        case .shareCNativeIphLight: return "\u{f9e8}"
        case .shareCNativeIphRegular: return "\u{f9e9}"
        case .shareContentOnDeviceBold: return "\u{f9ea}"
        case .shareContentOnDeviceLight: return "\u{f9eb}"
        case .shareContentOnDeviceRegular: return "\u{f9ec}"
        case .shareScreenAddBold: return "\u{f9ed}"
        case .shareScreenAddLight: return "\u{f9ee}"
        case .shareScreenAddRegular: return "\u{f9ef}"
        case .shareScreenBadgeFilled: return "\u{f9f0}"
        case .shareScreenBold: return "\u{f9f1}"
        case .shareScreenFilled: return "\u{f9f2}"
        case .shareScreenLight: return "\u{f9f3}"
        case .shareScreenRegular: return "\u{f9f4}"
        case .shareSpaceBold: return "\u{f9f5}"
        case .shareSpaceLight: return "\u{f9f6}"
        case .shareSpaceRegular: return "\u{f9f7}"
        case .shieldBold: return "\u{f9f8}"
        case .shieldLight: return "\u{f9f9}"
        case .shieldRegular: return "\u{f9fa}"
        case .shoppingCartBold: return "\u{f9fb}"
        case .shoppingCartFilled: return "\u{f9fc}"
        case .shoppingCartLight: return "\u{f9fd}"
        case .shoppingCartRegular: return "\u{f9fe}"
        case .shortTextBoxBold: return "\u{f9ff}"
        case .shortTextBoxLight: return "\u{fa00}"
        case .shortTextBoxRegular: return "\u{fa01}"
        case .showBold: return "\u{fa02}"
        case .showFilled: return "\u{fa03}"
        case .showLight: return "\u{fa04}"
        case .showRegular: return "\u{fa05}"
        case .signInBold: return "\u{fa06}"
        case .signInFilled: return "\u{fa07}"
        case .signInForcedBold: return "\u{fa08}"
        case .signInForcedLight: return "\u{fa09}"
        case .signInForcedRegular: return "\u{fa0a}"
        case .signInLight: return "\u{fa0b}"
        case .signInRegular: return "\u{fa0c}"
        case .signLangIntBold: return "\u{fa0d}"
        case .signLangIntLight: return "\u{fa0e}"
        case .signLangIntRegular: return "\u{fa0f}"
        case .signOutBold: return "\u{fa10}"
        case .signOutLight: return "\u{fa11}"
        case .signOutRegular: return "\u{fa12}"
        case .signalFourBold: return "\u{fa13}"
        case .signalFourLight: return "\u{fa14}"
        case .signalFourRegular: return "\u{fa15}"
        case .signalOneBold: return "\u{fa16}"
        case .signalOneLight: return "\u{fa17}"
        case .signalOneRegular: return "\u{fa18}"
        case .signalThreeBold: return "\u{fa19}"
        case .signalThreeLight: return "\u{fa1a}"
        case .signalThreeRegular: return "\u{fa1b}"
        case .signalTwoBold: return "\u{fa1c}"
        case .signalTwoLight: return "\u{fa1d}"
        case .signalTwoRegular: return "\u{fa1e}"
        case .signalZeroBold: return "\u{fa1f}"
        case .signalZeroLight: return "\u{fa20}"
        case .signalZeroRegular: return "\u{fa21}"
        case .simplePromotionBold: return "\u{fa22}"
        case .simplePromotionLight: return "\u{fa23}"
        case .simplePromotionRegular: return "\u{fa24}"
        case .singleNumberReachBold: return "\u{fa25}"
        case .singleNumberReachLight: return "\u{fa26}"
        case .singleNumberReachRegular: return "\u{fa27}"
        case .sipRegistrationInProgressBold: return "\u{fa28}"
        case .sipRegistrationInProgressFilled: return "\u{fa29}"
        case .sipRegistrationInProgressLight: return "\u{fa2a}"
        case .sipRegistrationInProgressRegular: return "\u{fa2b}"
        case .skipBold: return "\u{fa2c}"
        case .skipBwBold: return "\u{fa2d}"
        case .skipBwFilled: return "\u{fa2e}"
        case .skipBwLight: return "\u{fa2f}"
        case .skipBwRegular: return "\u{fa30}"
        case .skipFwBold: return "\u{fa31}"
        case .skipFwFilled: return "\u{fa32}"
        case .skipFwLight: return "\u{fa33}"
        case .skipFwRegular: return "\u{fa34}"
        case .skipLight: return "\u{fa35}"
        case .skipRegular: return "\u{fa36}"
        case .slidoColored: return "\u{fa37}"
        case .smsFilled: return "\u{fa38}"
        case .smsInboundBold: return "\u{fa39}"
        case .smsInboundLight: return "\u{fa3a}"
        case .smsInboundRegular: return "\u{fa3b}"
        case .smsMessageBold: return "\u{fa3c}"
        case .smsMessageFilled: return "\u{fa3d}"
        case .smsMessageLight: return "\u{fa3e}"
        case .smsMessageRegular: return "\u{fa3f}"
        case .smsOutgoingFilled: return "\u{fa40}"
        case .smsUnreadBold: return "\u{fa41}"
        case .smsUnreadLight: return "\u{fa42}"
        case .smsUnreadRegular: return "\u{fa43}"
        case .socialAlexaColored: return "\u{fa44}"
        case .socialAlexa: return "\u{fa45}"
        case .socialFacebookColored: return "\u{fa46}"
        case .socialFacebook: return "\u{fa47}"
        case .socialFbmessengerColored: return "\u{fa48}"
        case .socialFbmessenger: return "\u{fa49}"
        case .socialInstagram: return "\u{fa4a}"
        case .socialLineColored: return "\u{fa4b}"
        case .socialLine: return "\u{fa4c}"
        case .socialMicrosoftColored: return "\u{fa4d}"
        case .socialMicrosoft: return "\u{fa4e}"
        case .socialMmsColoredGold: return "\u{fa4f}"
        case .socialMms: return "\u{fa50}"
        case .socialRcsColored: return "\u{fa51}"
        case .socialRcs: return "\u{fa52}"
        case .socialSmsColoredMint: return "\u{fa53}"
        case .socialSmsOutgoing: return "\u{fa54}"
        case .socialSms: return "\u{fa55}"
        case .socialTelegramColored: return "\u{fa56}"
        case .socialTelegram: return "\u{fa57}"
        case .socialViberColored: return "\u{fa58}"
        case .socialViber: return "\u{fa59}"
        case .socialWechatColored: return "\u{fa5a}"
        case .socialWechat: return "\u{fa5b}"
        case .socialWhatsappColored: return "\u{fa5c}"
        case .socialWhatsapp: return "\u{fa5d}"
        case .socialX: return "\u{fa5e}"
        case .sortAscendingBold: return "\u{fa5f}"
        case .sortAscendingLight: return "\u{fa60}"
        case .sortAscendingRegular: return "\u{fa61}"
        case .sortDescendingBold: return "\u{fa62}"
        case .sortDescendingLight: return "\u{fa63}"
        case .sortDescendingRegular: return "\u{fa64}"
        case .soundDefaultBold: return "\u{fa65}"
        case .soundDefaultLight: return "\u{fa66}"
        case .soundDefaultRegular: return "\u{fa67}"
        case .sparkleBold: return "\u{fa68}"
        case .sparkleFilled: return "\u{fa69}"
        case .sparkleLight: return "\u{fa6a}"
        case .sparkleRegular: return "\u{fa6b}"
        case .speakerBold: return "\u{fa6c}"
        case .speakerDisconnectedBold: return "\u{fa6d}"
        case .speakerDisconnectedFilled: return "\u{fa6e}"
        case .speakerDisconnectedLight: return "\u{fa6f}"
        case .speakerDisconnectedRegular: return "\u{fa70}"
        case .speakerFilled: return "\u{fa71}"
        case .speakerLight: return "\u{fa72}"
        case .speakerMutedBold: return "\u{fa73}"
        case .speakerMutedFilled: return "\u{fa74}"
        case .speakerMutedLight: return "\u{fa75}"
        case .speakerMutedRegular: return "\u{fa76}"
        case .speakerOffBold: return "\u{fa77}"
        case .speakerOffFilled: return "\u{fa78}"
        case .speakerOffLight: return "\u{fa79}"
        case .speakerOffRegular: return "\u{fa7a}"
        case .speakerOnBold: return "\u{fa7b}"
        case .speakerOnLight: return "\u{fa7c}"
        case .speakerOnRegular: return "\u{fa7d}"
        case .speakerRegular: return "\u{fa7e}"
        case .speakerTurnDownBold: return "\u{fa7f}"
        case .speakerTurnDownFilled: return "\u{fa80}"
        case .speakerTurnDownLight: return "\u{fa81}"
        case .speakerTurnDownRegular: return "\u{fa82}"
        case .speakerTurnUpBold: return "\u{fa83}"
        case .speakerTurnUpFilled: return "\u{fa84}"
        case .speakerTurnUpLight: return "\u{fa85}"
        case .speakerTurnUpRegular: return "\u{fa86}"
        case .speedDialBold: return "\u{fa87}"
        case .speedDialFilled: return "\u{fa88}"
        case .speedDialLight: return "\u{fa89}"
        case .speedDialRegular: return "\u{fa8a}"
        case .spellCheckerBold: return "\u{fa8b}"
        case .spellCheckerLight: return "\u{fa8c}"
        case .spellCheckerRegular: return "\u{fa8d}"
        case .spinnerBold: return "\u{fa8e}"
        case .spinnerInProgressBold: return "\u{fa8f}"
        case .spinnerInProgressLight: return "\u{fa90}"
        case .spinnerInProgressRegular: return "\u{fa91}"
        case .spinnerLight: return "\u{fa92}"
        case .spinnerRegular: return "\u{fa93}"
        case .splitViewBold: return "\u{fa94}"
        case .splitViewLight: return "\u{fa95}"
        case .splitViewRegular: return "\u{fa96}"
        case .stackedAreaChartBold: return "\u{fa97}"
        case .stackedAreaChartFilled: return "\u{fa98}"
        case .stackedAreaChartFullBold: return "\u{fa99}"
        case .stackedAreaChartFullFilled: return "\u{fa9a}"
        case .stackedAreaChartFullLight: return "\u{fa9b}"
        case .stackedAreaChartFullRegular: return "\u{fa9c}"
        case .stackedAreaChartLight: return "\u{fa9d}"
        case .stackedAreaChartRegular: return "\u{fa9e}"
        case .stackedBarChartBold: return "\u{fa9f}"
        case .stackedBarChartFilled: return "\u{faa0}"
        case .stackedBarChartFullBold: return "\u{faa1}"
        case .stackedBarChartFullFilled: return "\u{faa2}"
        case .stackedBarChartFullLight: return "\u{faa3}"
        case .stackedBarChartFullRegular: return "\u{faa4}"
        case .stackedBarChartLight: return "\u{faa5}"
        case .stackedBarChartRegular: return "\u{faa6}"
        case .startChatBold: return "\u{faa7}"
        case .startChatLight: return "\u{faa8}"
        case .startChatRegular: return "\u{faa9}"
        case .stethoscopeBold: return "\u{faaa}"
        case .stethoscopeLight: return "\u{faab}"
        case .stethoscopeRegular: return "\u{faac}"
        case .stickersBold: return "\u{faad}"
        case .stickersLight: return "\u{faae}"
        case .stickersRegular: return "\u{faaf}"
        case .stickiesBold: return "\u{fab0}"
        case .stickiesLight: return "\u{fab1}"
        case .stickiesRegular: return "\u{fab2}"
        case .stopBold: return "\u{fab3}"
        case .stopCircleBold: return "\u{fab4}"
        case .stopCircleFilled: return "\u{fab5}"
        case .stopCircleLight: return "\u{fab6}"
        case .stopCircleRegular: return "\u{fab7}"
        case .stopContentShareBold: return "\u{fab8}"
        case .stopContentShareLight: return "\u{fab9}"
        case .stopContentShareRegular: return "\u{faba}"
        case .stopFilled: return "\u{fabb}"
        case .stopLight: return "\u{fabc}"
        case .stopRegular: return "\u{fabd}"
        case .storedInfoBold: return "\u{fabe}"
        case .storedInfoFilled: return "\u{fabf}"
        case .storedInfoLight: return "\u{fac0}"
        case .storedInfoRegular: return "\u{fac1}"
        case .streamingBold: return "\u{fac2}"
        case .streamingLight: return "\u{fac3}"
        case .streamingRegular: return "\u{fac4}"
        case .strikethroughBold: return "\u{fac5}"
        case .strikethroughFilled: return "\u{fac6}"
        case .strikethroughLight: return "\u{fac7}"
        case .strikethroughRegular: return "\u{fac8}"
        case .studioModeBold: return "\u{fac9}"
        case .studioModeLight: return "\u{faca}"
        case .studioModeRegular: return "\u{facb}"
        case .subscriptBold: return "\u{facc}"
        case .subscriptLight: return "\u{facd}"
        case .subscriptRegular: return "\u{face}"
        case .superscriptBold: return "\u{facf}"
        case .superscriptLight: return "\u{fad0}"
        case .superscriptRegular: return "\u{fad1}"
        case .surveyBold: return "\u{fad2}"
        case .surveyFilled: return "\u{fad3}"
        case .surveyLight: return "\u{fad4}"
        case .surveyRegular: return "\u{fad5}"
        case .swiftmatchColored: return "\u{fad6}"
        case .swiftmatch: return "\u{fad7}"
        case .sxEightyCodecBold: return "\u{fad8}"
        case .sxEightyCodecLight: return "\u{fad9}"
        case .sxEightyCodecRegular: return "\u{fada}"
        case .sxTenBold: return "\u{fadb}"
        case .sxTenLight: return "\u{fadc}"
        case .sxTenRegular: return "\u{fadd}"
        case .sxTwentyBold: return "\u{fade}"
        case .sxTwentyLight: return "\u{fadf}"
        case .sxTwentyRegular: return "\u{fae0}"
        case .tableBold: return "\u{fae1}"
        case .tableLight: return "\u{fae2}"
        case .tableRegular: return "\u{fae3}"
        case .tabletBold: return "\u{fae4}"
        case .tabletLight: return "\u{fae5}"
        case .tabletRegular: return "\u{fae6}"
        case .tabsBold: return "\u{fae7}"
        case .tabsLight: return "\u{fae8}"
        case .tabsRegular: return "\u{fae9}"
        case .tagBold: return "\u{faea}"
        case .tagLight: return "\u{faeb}"
        case .tagRegular: return "\u{faec}"
        case .tapBold: return "\u{faed}"
        case .tapFilled: return "\u{faee}"
        case .tapLight: return "\u{faef}"
        case .tapRegular: return "\u{faf0}"
        case .telepresenceAlertBold: return "\u{faf1}"
        case .telepresenceAlertLight: return "\u{faf2}"
        case .telepresenceAlertMutedBold: return "\u{faf3}"
        case .telepresenceAlertMutedLight: return "\u{faf4}"
        case .telepresenceAlertMutedRegular: return "\u{faf5}"
        case .telepresenceAlertRegular: return "\u{faf6}"
        case .telepresenceBold: return "\u{faf7}"
        case .telepresenceIxFiveThousandBold: return "\u{faf8}"
        case .telepresenceIxFiveThousandLight: return "\u{faf9}"
        case .telepresenceIxFiveThousandRegular: return "\u{fafa}"
        case .telepresenceLight: return "\u{fafb}"
        case .telepresenceMutedBold: return "\u{fafc}"
        case .telepresenceMutedLight: return "\u{fafd}"
        case .telepresenceMutedRegular: return "\u{fafe}"
        case .telepresencePrivateBold: return "\u{faff}"
        case .telepresencePrivateLight: return "\u{fb00}"
        case .telepresencePrivateRegular: return "\u{fb01}"
        case .telepresenceRegular: return "\u{fb02}"
        case .temperatureBold: return "\u{fb03}"
        case .temperatureLight: return "\u{fb04}"
        case .temperatureRegular: return "\u{fb05}"
        case .testTubeBold: return "\u{fb06}"
        case .testTubeFilled: return "\u{fb07}"
        case .testTubeLight: return "\u{fb08}"
        case .testTubeRegular: return "\u{fb09}"
        case .textAlignCenterBold: return "\u{fb0a}"
        case .textAlignCenterFilled: return "\u{fb0b}"
        case .textAlignCenterLight: return "\u{fb0c}"
        case .textAlignCenterRegular: return "\u{fb0d}"
        case .textAlignLeftBold: return "\u{fb0e}"
        case .textAlignLeftFilled: return "\u{fb0f}"
        case .textAlignLeftLight: return "\u{fb10}"
        case .textAlignLeftRegular: return "\u{fb11}"
        case .textAlignRightBold: return "\u{fb12}"
        case .textAlignRightFilled: return "\u{fb13}"
        case .textAlignRightLight: return "\u{fb14}"
        case .textAlignRightRegular: return "\u{fb15}"
        case .textBold: return "\u{fb16}"
        case .textBoxCursorLight: return "\u{fb17}"
        case .textCodeBlockBold: return "\u{fb18}"
        case .textCodeBlockLight: return "\u{fb19}"
        case .textCodeBlockRegular: return "\u{fb1a}"
        case .textHighlightBold: return "\u{fb1b}"
        case .textHighlightFilled: return "\u{fb1c}"
        case .textHighlightLight: return "\u{fb1d}"
        case .textHighlightRegular: return "\u{fb1e}"
        case .textLight: return "\u{fb1f}"
        case .textRegular: return "\u{fb20}"
        case .threeColumnBold: return "\u{fb21}"
        case .threeColumnLight: return "\u{fb22}"
        case .threeColumnRegular: return "\u{fb23}"
        case .threeDObjectBold: return "\u{fb24}"
        case .threeDObjectLight: return "\u{fb25}"
        case .threeDObjectRegular: return "\u{fb26}"
        case .timeExclusionBold: return "\u{fb27}"
        case .timeExclusionLight: return "\u{fb28}"
        case .timeExclusionRegular: return "\u{fb29}"
        case .tooFastBold: return "\u{fb2a}"
        case .tooFastLight: return "\u{fb2b}"
        case .tooFastRegular: return "\u{fb2c}"
        case .tooSlowBold: return "\u{fb2d}"
        case .tooSlowLight: return "\u{fb2e}"
        case .tooSlowRegular: return "\u{fb2f}"
        case .toolsBold: return "\u{fb30}"
        case .toolsFilled: return "\u{fb31}"
        case .toolsLight: return "\u{fb32}"
        case .toolsRegular: return "\u{fb33}"
        case .touchTenBold: return "\u{fb34}"
        case .touchTenLight: return "\u{fb35}"
        case .touchTenRegular: return "\u{fb36}"
        case .transcriptBold: return "\u{fb37}"
        case .transcriptFilled: return "\u{fb38}"
        case .transcriptLight: return "\u{fb39}"
        case .transcriptRegular: return "\u{fb3a}"
        case .translateBold: return "\u{fb3b}"
        case .translateLight: return "\u{fb3c}"
        case .translateRegular: return "\u{fb3d}"
        case .trendingBold: return "\u{fb3e}"
        case .trendingLight: return "\u{fb3f}"
        case .trendingRegular: return "\u{fb40}"
        case .trimBold: return "\u{fb41}"
        case .trimLight: return "\u{fb42}"
        case .trimRegular: return "\u{fb43}"
        case .twoColumnBold: return "\u{fb44}"
        case .twoColumnLight: return "\u{fb45}"
        case .twoColumnRegular: return "\u{fb46}"
        case .twoWayVoiceStreamBold: return "\u{fb47}"
        case .twoWayVoiceStreamFilled: return "\u{fb48}"
        case .twoWayVoiceStreamLight: return "\u{fb49}"
        case .twoWayVoiceStreamRegular: return "\u{fb4a}"
        case .ucmCloudBold: return "\u{fb4b}"
        case .ucmCloudLight: return "\u{fb4c}"
        case .ucmCloudRegular: return "\u{fb4d}"
        case .underlineBold: return "\u{fb4e}"
        case .underlineFilled: return "\u{fb4f}"
        case .underlineLight: return "\u{fb50}"
        case .underlineRegular: return "\u{fb51}"
        case .undoBold: return "\u{fb52}"
        case .undoLight: return "\u{fb53}"
        case .undoRegular: return "\u{fb54}"
        case .unlinkBold: return "\u{fb55}"
        case .unlinkLight: return "\u{fb56}"
        case .unlinkRegular: return "\u{fb57}"
        case .unreadBold: return "\u{fb58}"
        case .unreadFilled: return "\u{fb59}"
        case .unreadLight: return "\u{fb5a}"
        case .unreadRegular: return "\u{fb5b}"
        case .unsecureUnlockedBold: return "\u{fb5c}"
        case .unsecureUnlockedFilled: return "\u{fb5d}"
        case .unsecureUnlockedLight: return "\u{fb5e}"
        case .unsecureUnlockedRegular: return "\u{fb5f}"
        case .unsortedBold: return "\u{fb60}"
        case .unsortedLight: return "\u{fb61}"
        case .unsortedRegular: return "\u{fb62}"
        case .updateFileShareBold: return "\u{fb63}"
        case .updateFileShareLight: return "\u{fb64}"
        case .updateFileShareRegular: return "\u{fb65}"
        case .uploadBold: return "\u{fb66}"
        case .uploadImageBold: return "\u{fb67}"
        case .uploadImageLight: return "\u{fb68}"
        case .uploadImageRegular: return "\u{fb69}"
        case .uploadLight: return "\u{fb6a}"
        case .uploadRegular: return "\u{fb6b}"
        case .urgentVoicemailBold: return "\u{fb6c}"
        case .urgentVoicemailFilled: return "\u{fb6d}"
        case .usbBold: return "\u{fb6e}"
        case .usbHeadsetBold: return "\u{fb6f}"
        case .usbHeadsetLight: return "\u{fb70}"
        case .usbHeadsetMutedBold: return "\u{fb71}"
        case .usbHeadsetMutedLight: return "\u{fb72}"
        case .usbHeadsetMutedRegular: return "\u{fb73}"
        case .usbHeadsetRegular: return "\u{fb74}"
        case .usbLight: return "\u{fb75}"
        case .usbRegular: return "\u{fb76}"
        case .userBold: return "\u{fb77}"
        case .userDeactivateBold: return "\u{fb78}"
        case .userDeactivateLight: return "\u{fb79}"
        case .userDeactivateRegular: return "\u{fb7a}"
        case .userLight: return "\u{fb7b}"
        case .userRegular: return "\u{fb7c}"
        case .videoBlurBold: return "\u{fb7d}"
        case .videoBlurFilled: return "\u{fb7e}"
        case .videoBlurLight: return "\u{fb7f}"
        case .videoBlurRegular: return "\u{fb80}"
        case .videoBold: return "\u{fb81}"
        case .videoEffectBold: return "\u{fb82}"
        case .videoEffectFilled: return "\u{fb83}"
        case .videoEffectLight: return "\u{fb84}"
        case .videoEffectRegular: return "\u{fb85}"
        case .videoFilled: return "\u{fb86}"
        case .videoLayoutBold: return "\u{fb87}"
        case .videoLayoutEqualBold: return "\u{fb88}"
        case .videoLayoutEqualDualBold: return "\u{fb89}"
        case .videoLayoutEqualDualLight: return "\u{fb8a}"
        case .videoLayoutEqualDualRegular: return "\u{fb8b}"
        case .videoLayoutEqualFilled: return "\u{fb8c}"
        case .videoLayoutEqualLight: return "\u{fb8d}"
        case .videoLayoutEqualRegular: return "\u{fb8e}"
        case .videoLayoutFilled: return "\u{fb8f}"
        case .videoLayoutLight: return "\u{fb90}"
        case .videoLayoutOverlayBold: return "\u{fb91}"
        case .videoLayoutOverlayFilled: return "\u{fb92}"
        case .videoLayoutOverlayLight: return "\u{fb93}"
        case .videoLayoutOverlayRegular: return "\u{fb94}"
        case .videoLayoutPresenterDominantBold: return "\u{fb95}"
        case .videoLayoutPresenterDominantLight: return "\u{fb96}"
        case .videoLayoutPresenterDominantRegular: return "\u{fb97}"
        case .videoLayoutProminentBold: return "\u{fb98}"
        case .videoLayoutProminentFilled: return "\u{fb99}"
        case .videoLayoutProminentLight: return "\u{fb9a}"
        case .videoLayoutProminentRegular: return "\u{fb9b}"
        case .videoLayoutRegular: return "\u{fb9c}"
        case .videoLayoutShareDominantBold: return "\u{fb9d}"
        case .videoLayoutShareDominantLight: return "\u{fb9e}"
        case .videoLayoutShareDominantRegular: return "\u{fb9f}"
        case .videoLayoutSingleBold: return "\u{fba0}"
        case .videoLayoutSingleFilled: return "\u{fba1}"
        case .videoLayoutSingleLight: return "\u{fba2}"
        case .videoLayoutSingleRegular: return "\u{fba3}"
        case .videoLayoutStackBold: return "\u{fba4}"
        case .videoLayoutStackFilled: return "\u{fba5}"
        case .videoLayoutStackLight: return "\u{fba6}"
        case .videoLayoutStackRegular: return "\u{fba7}"
        case .videoLayoutVideoDominantBold: return "\u{fba8}"
        case .videoLayoutVideoDominantFilled: return "\u{fba9}"
        case .videoLayoutVideoDominantLight: return "\u{fbaa}"
        case .videoLayoutVideoDominantRegular: return "\u{fbab}"
        case .videoLight: return "\u{fbac}"
        case .videoPlusBold: return "\u{fbad}"
        case .videoPlusFilled: return "\u{fbae}"
        case .videoPlusLight: return "\u{fbaf}"
        case .videoPlusRegular: return "\u{fbb0}"
        case .videoRegular: return "\u{fbb1}"
        case .videoSpeakerTrackBold: return "\u{fbb2}"
        case .videoSpeakerTrackFilled: return "\u{fbb3}"
        case .videoSpeakerTrackLight: return "\u{fbb4}"
        case .videoSpeakerTrackRegular: return "\u{fbb5}"
        case .videotronColored: return "\u{fbb6}"
        case .videotronHorizontal: return "\u{fbb7}"
        case .viewAllBold: return "\u{fbb8}"
        case .viewAllLight: return "\u{fbb9}"
        case .viewAllRegular: return "\u{fbba}"
        case .viewListBold: return "\u{fbbb}"
        case .viewListLight: return "\u{fbbc}"
        case .viewListRegular: return "\u{fbbd}"
        case .viewStackedBold: return "\u{fbbe}"
        case .viewStackedFilled: return "\u{fbbf}"
        case .viewStackedLight: return "\u{fbc0}"
        case .viewStackedRegular: return "\u{fbc1}"
        case .viewThumbnailBold: return "\u{fbc2}"
        case .viewThumbnailFilled: return "\u{fbc3}"
        case .viewThumbnailLight: return "\u{fbc4}"
        case .viewThumbnailRegular: return "\u{fbc5}"
        case .visionproBold: return "\u{fbc6}"
        case .visionproFilled: return "\u{fbc7}"
        case .visionproLight: return "\u{fbc8}"
        case .visionproMoveCallInBold: return "\u{fbc9}"
        case .visionproMoveCallInFilled: return "\u{fbca}"
        case .visionproMoveCallInLight: return "\u{fbcb}"
        case .visionproMoveCallInOutBold: return "\u{fbcc}"
        case .visionproMoveCallInOutFilled: return "\u{fbcd}"
        case .visionproMoveCallInOutLight: return "\u{fbce}"
        case .visionproMoveCallInOutRegular: return "\u{fbcf}"
        case .visionproMoveCallInRegular: return "\u{fbd0}"
        case .visionproMoveCallOutBold: return "\u{fbd1}"
        case .visionproMoveCallOutFilled: return "\u{fbd2}"
        case .visionproMoveCallOutLight: return "\u{fbd3}"
        case .visionproMoveCallOutRegular: return "\u{fbd4}"
        case .visionproRegular: return "\u{fbd5}"
        case .voicemailBold: return "\u{fbd6}"
        case .voicemailFilled: return "\u{fbd7}"
        case .voicemailLight: return "\u{fbd8}"
        case .voicemailRegular: return "\u{fbd9}"
        case .vscBold: return "\u{fbda}"
        case .vscLight: return "\u{fbdb}"
        case .vscRegular: return "\u{fbdc}"
        case .waffleMenuBold: return "\u{fbdd}"
        case .waffleMenuLight: return "\u{fbde}"
        case .waffleMenuRegular: return "\u{fbdf}"
        case .waitingRoomBold: return "\u{fbe0}"
        case .waitingRoomLight: return "\u{fbe1}"
        case .waitingRoomRegular: return "\u{fbe2}"
        case .wallpaperBold: return "\u{fbe3}"
        case .wallpaperLight: return "\u{fbe4}"
        case .wallpaperRegular: return "\u{fbe5}"
        case .warningBadgeFilled: return "\u{fbe6}"
        case .warningBold: return "\u{fbe7}"
        case .warningFilled: return "\u{fbe8}"
        case .warningLight: return "\u{fbe9}"
        case .warningRegular: return "\u{fbea}"
        case .webexBoardBold: return "\u{fbeb}"
        case .webexBoardLight: return "\u{fbec}"
        case .webexBoardRegular: return "\u{fbed}"
        case .webexCodecPlusBold: return "\u{fbee}"
        case .webexCodecPlusLight: return "\u{fbef}"
        case .webexCodecPlusRegular: return "\u{fbf0}"
        case .webexDeskCameraBold: return "\u{fbf1}"
        case .webexDeskCameraLight: return "\u{fbf2}"
        case .webexDeskCameraRegular: return "\u{fbf3}"
        case .webexHelixBold: return "\u{fbf4}"
        case .webexHelixLight: return "\u{fbf5}"
        case .webexHelixRegular: return "\u{fbf6}"
        case .webexMeetingsBold: return "\u{fbf7}"
        case .webexMeetingsFilled: return "\u{fbf8}"
        case .webexMeetingsLight: return "\u{fbf9}"
        case .webexMeetingsRegular: return "\u{fbfa}"
        case .webexQuadCameraBold: return "\u{fbfb}"
        case .webexQuadCameraLight: return "\u{fbfc}"
        case .webexQuadCameraRegular: return "\u{fbfd}"
        case .webexRoomKitBold: return "\u{fbfe}"
        case .webexRoomKitLight: return "\u{fbff}"
        case .webexRoomKitPlusBold: return "\u{fc00}"
        case .webexRoomKitPlusLight: return "\u{fc01}"
        case .webexRoomKitPlusRegular: return "\u{fc02}"
        case .webexRoomKitRegular: return "\u{fc03}"
        case .webexShareBold: return "\u{fc04}"
        case .webexShareLight: return "\u{fc05}"
        case .webexShareRegular: return "\u{fc06}"
        case .webexTeamsBold: return "\u{fc07}"
        case .webexTeamsFilled: return "\u{fc08}"
        case .webexTeamsLight: return "\u{fc09}"
        case .webexTeamsNewBold: return "\u{fc0a}"
        case .webexTeamsNewFilled: return "\u{fc0b}"
        case .webexTeamsNewLight: return "\u{fc0c}"
        case .webexTeamsNewRegular: return "\u{fc0d}"
        case .webexTeamsRegular: return "\u{fc0e}"
        case .webexTeamsRemoveBold: return "\u{fc0f}"
        case .webexTeamsRemoveLight: return "\u{fc10}"
        case .webexTeamsRemoveRegular: return "\u{fc11}"
        case .webinarBold: return "\u{fc12}"
        case .webinarFilled: return "\u{fc13}"
        case .webinarLight: return "\u{fc14}"
        case .webinarRegular: return "\u{fc15}"
        case .weeklyRecurringScheduleBold: return "\u{fc16}"
        case .weeklyRecurringScheduleLight: return "\u{fc17}"
        case .weeklyRecurringScheduleRegular: return "\u{fc18}"
        case .whisperCoachBold: return "\u{fc19}"
        case .whisperCoachFilled: return "\u{fc1a}"
        case .whisperCoachLight: return "\u{fc1b}"
        case .whisperCoachRegular: return "\u{fc1c}"
        case .whiteboardBold: return "\u{fc1d}"
        case .whiteboardContentBold: return "\u{fc1e}"
        case .whiteboardContentFilled: return "\u{fc1f}"
        case .whiteboardContentLight: return "\u{fc20}"
        case .whiteboardContentRegular: return "\u{fc21}"
        case .whiteboardFilled: return "\u{fc22}"
        case .whiteboardLight: return "\u{fc23}"
        case .whiteboardRegular: return "\u{fc24}"
        case .widgetBold: return "\u{fc25}"
        case .widgetFilled: return "\u{fc26}"
        case .widgetLight: return "\u{fc27}"
        case .widgetRegular: return "\u{fc28}"
        case .wifiBold: return "\u{fc29}"
        case .wifiErrorBold: return "\u{fc2a}"
        case .wifiErrorLight: return "\u{fc2b}"
        case .wifiErrorRegular: return "\u{fc2c}"
        case .wifiLight: return "\u{fc2d}"
        case .wifiRegular: return "\u{fc2e}"
        case .wifiSignalGoodBold: return "\u{fc2f}"
        case .wifiSignalGoodLight: return "\u{fc30}"
        case .wifiSignalGoodRegular: return "\u{fc31}"
        case .wifiSignalPoorBold: return "\u{fc32}"
        case .wifiSignalPoorLight: return "\u{fc33}"
        case .wifiSignalPoorRegular: return "\u{fc34}"
        case .wifiSignalUnstableBold: return "\u{fc35}"
        case .wifiSignalUnstableLight: return "\u{fc36}"
        case .wifiSignalUnstableRegular: return "\u{fc37}"
        case .windowCornerScrubBold: return "\u{fc38}"
        case .windowCornerScrubLight: return "\u{fc39}"
        case .windowCornerScrubRegular: return "\u{fc3a}"
        case .windowRightCornerScrubBold: return "\u{fc3b}"
        case .windowRightCornerScrubLight: return "\u{fc3c}"
        case .windowRightCornerScrubRegular: return "\u{fc3d}"
        case .windowVerticalScrubBold: return "\u{fc3e}"
        case .windowVerticalScrubLight: return "\u{fc3f}"
        case .windowVerticalScrubRegular: return "\u{fc40}"
        case .workflowDeploymentsBold: return "\u{fc41}"
        case .workflowDeploymentsFilled: return "\u{fc42}"
        case .workflowDeploymentsLight: return "\u{fc43}"
        case .workflowDeploymentsRegular: return "\u{fc44}"
        case .workphoneBold: return "\u{fc45}"
        case .workphoneLight: return "\u{fc46}"
        case .workphoneRegular: return "\u{fc47}"
        case .zoomColored: return "\u{fc48}"
        case .zoomInBold: return "\u{fc49}"
        case .zoomInLight: return "\u{fc4a}"
        case .zoomInRegular: return "\u{fc4b}"
        case .zoomOutBold: return "\u{fc4c}"
        case .zoomOutLight: return "\u{fc4d}"
        case .zoomOutRegular: return "\u{fc4e}"

        default:
            // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
            assertionFailure("Unknown icon type: \(self)")
            return ""
        }
    }

    public var filename: String {
        switch self {
        case ._invalid: return ""
        case .unhandledCase: return ""
        case .accessibilityBold: return "accessibility-bold"
        case .accessibilityLight: return "accessibility-light"
        case .accessibilityRegular: return "accessibility-regular"
        case .accessoriesBold: return "accessories-bold"
        case .accessoriesFilled: return "accessories-filled"
        case .accessoriesLight: return "accessories-light"
        case .accessoriesRegular: return "accessories-regular"
        case .accordianBold: return "accordian-bold"
        case .accordianLight: return "accordian-light"
        case .accordianRegular: return "accordian-regular"
        case .activePresenceSmallFilled: return "active-presence-small-filled"
        case .activeSpeakerAlertBold: return "active-speaker-alert-bold"
        case .activeSpeakerAlertLight: return "active-speaker-alert-light"
        case .activeSpeakerAlertRegular: return "active-speaker-alert-regular"
        case .activeSpeakerBold: return "active-speaker-bold"
        case .activeSpeakerLight: return "active-speaker-light"
        case .activeSpeakerLockBold: return "active-speaker-lock-bold"
        case .activeSpeakerLockLight: return "active-speaker-lock-light"
        case .activeSpeakerLockRegular: return "active-speaker-lock-regular"
        case .activeSpeakerRegular: return "active-speaker-regular"
        case .addOptionBold: return "add-option-bold"
        case .addOptionLight: return "add-option-light"
        case .addOptionRegular: return "add-option-regular"
        case .addPhotoBold: return "add-photo-bold"
        case .addPhotoLight: return "add-photo-light"
        case .addPhotoRegular: return "add-photo-regular"
        case .addPollBold: return "add-poll-bold"
        case .addPollLight: return "add-poll-light"
        case .addPollRegular: return "add-poll-regular"
        case .addQuestionBold: return "add-question-bold"
        case .addQuestionLight: return "add-question-light"
        case .addQuestionRegular: return "add-question-regular"
        case .addVideoMarkerBold: return "add-video-marker-bold"
        case .addVideoMarkerLight: return "add-video-marker-light"
        case .addVideoMarkerRegular: return "add-video-marker-regular"
        case .adjustAudioBold: return "adjust-audio-bold"
        case .adjustAudioLight: return "adjust-audio-light"
        case .adjustAudioRegular: return "adjust-audio-regular"
        case .adjustBold: return "adjust-bold"
        case .adjustLight: return "adjust-light"
        case .adjustMicrophoneBold: return "adjust-microphone-bold"
        case .adjustMicrophoneLight: return "adjust-microphone-light"
        case .adjustMicrophoneRegular: return "adjust-microphone-regular"
        case .adjustRegular: return "adjust-regular"
        case .adjustVideoBold: return "adjust-video-bold"
        case .adjustVideoLight: return "adjust-video-light"
        case .adjustVideoRegular: return "adjust-video-regular"
        case .adminBold: return "admin-bold"
        case .adminFilled: return "admin-filled"
        case .adminLight: return "admin-light"
        case .adminRegular: return "admin-regular"
        case .advanceScheduleBold: return "advance-schedule-bold"
        case .advanceScheduleLight: return "advance-schedule-light"
        case .advanceScheduleRegular: return "advance-schedule-regular"
        case .advancedNoiseRemovalBold: return "advanced-noise-removal-bold"
        case .advancedNoiseRemovalLight: return "advanced-noise-removal-light"
        case .advancedNoiseRemovalRegular: return "advanced-noise-removal-regular"
        case .agentUniqueCodeBold: return "agent-unique-code-bold"
        case .agentUniqueCodeLight: return "agent-unique-code-light"
        case .agentUniqueCodeRegular: return "agent-unique-code-regular"
        case .airplayBold: return "airplay-bold"
        case .airplayLight: return "airplay-light"
        case .airplayRegular: return "airplay-regular"
        case .alarmBold: return "alarm-bold"
        case .alarmFilled: return "alarm-filled"
        case .alarmLight: return "alarm-light"
        case .alarmRegular: return "alarm-regular"
        case .alertActiveBold: return "alert-active-bold"
        case .alertActiveFilled: return "alert-active-filled"
        case .alertActiveLight: return "alert-active-light"
        case .alertActiveRegular: return "alert-active-regular"
        case .alertBold: return "alert-bold"
        case .alertFilled: return "alert-filled"
        case .alertLight: return "alert-light"
        case .alertMutedBold: return "alert-muted-bold"
        case .alertMutedFilled: return "alert-muted-filled"
        case .alertMutedLight: return "alert-muted-light"
        case .alertMutedRegular: return "alert-muted-regular"
        case .alertRegular: return "alert-regular"
        case .alignBottomBold: return "align-bottom-bold"
        case .alignBottomFilled: return "align-bottom-filled"
        case .alignBottomLight: return "align-bottom-light"
        case .alignBottomRegular: return "align-bottom-regular"
        case .alignHorizontalCenterBold: return "align-horizontal-center-bold"
        case .alignHorizontalCenterFilled: return "align-horizontal-center-filled"
        case .alignHorizontalCenterLight: return "align-horizontal-center-light"
        case .alignHorizontalCenterRegular: return "align-horizontal-center-regular"
        case .alignLeftBold: return "align-left-bold"
        case .alignLeftFilled: return "align-left-filled"
        case .alignLeftLight: return "align-left-light"
        case .alignLeftRegular: return "align-left-regular"
        case .alignRightBold: return "align-right-bold"
        case .alignRightFilled: return "align-right-filled"
        case .alignRightLight: return "align-right-light"
        case .alignRightRegular: return "align-right-regular"
        case .alignTopBold: return "align-top-bold"
        case .alignTopFilled: return "align-top-filled"
        case .alignTopLight: return "align-top-light"
        case .alignTopRegular: return "align-top-regular"
        case .alignVerticalCenterBold: return "align-vertical-center-bold"
        case .alignVerticalCenterFilled: return "align-vertical-center-filled"
        case .alignVerticalCenterLight: return "align-vertical-center-light"
        case .alignVerticalCenterRegular: return "align-vertical-center-regular"
        case .allowToAnnotateBold: return "allow-to-annotate-bold"
        case .allowToAnnotateLight: return "allow-to-annotate-light"
        case .allowToAnnotateRegular: return "allow-to-annotate-regular"
        case .alphalinkColored: return "alphalink-colored"
        case .alternateResponseBold: return "alternate-response-bold"
        case .alternateResponseLight: return "alternate-response-light"
        case .alternateResponseRegular: return "alternate-response-regular"
        case .analogHeadsetBold: return "analog-headset-bold"
        case .analogHeadsetLight: return "analog-headset-light"
        case .analogHeadsetRegular: return "analog-headset-regular"
        case .analysisBold: return "analysis-bold"
        case .analysisFilled: return "analysis-filled"
        case .analysisLight: return "analysis-light"
        case .analysisRegular: return "analysis-regular"
        case .annotateBold: return "annotate-bold"
        case .annotateFilled: return "annotate-filled"
        case .annotateLight: return "annotate-light"
        case .annotateRegular: return "annotate-regular"
        case .announcementBold: return "announcement-bold"
        case .announcementFilled: return "announcement-filled"
        case .announcementLight: return "announcement-light"
        case .announcementMutedBold: return "announcement-muted-bold"
        case .announcementMutedFilled: return "announcement-muted-filled"
        case .announcementMutedLight: return "announcement-muted-light"
        case .announcementMutedRegular: return "announcement-muted-regular"
        case .announcementRegular: return "announcement-regular"
        case .appPushBold: return "app-push-bold"
        case .appPushLight: return "app-push-light"
        case .appPushRegular: return "app-push-regular"
        case .appearanceBold: return "appearance-bold"
        case .appearanceLight: return "appearance-light"
        case .appearanceRegular: return "appearance-regular"
        case .applauseBold: return "applause-bold"
        case .applauseLight: return "applause-light"
        case .applauseRegular: return "applause-regular"
        case .appleBold: return "apple-bold"
        case .appleBusinessChatColored: return "apple-business-chat-colored"
        case .appleFilled: return "apple-filled"
        case .appleLight: return "apple-light"
        case .appleRegular: return "apple-regular"
        case .applicationBold: return "application-bold"
        case .applicationLight: return "application-light"
        case .applicationPanelBold: return "application-panel-bold"
        case .applicationPanelLight: return "application-panel-light"
        case .applicationPanelRegular: return "application-panel-regular"
        case .applicationRegular: return "application-regular"
        case .applicationsBold: return "applications-bold"
        case .applicationsFilled: return "applications-filled"
        case .applicationsLight: return "applications-light"
        case .applicationsRegular: return "applications-regular"
        case .approvalPendingBold: return "approval-pending-bold"
        case .approvalPendingLight: return "approval-pending-light"
        case .approvalPendingRegular: return "approval-pending-regular"
        case .approvalsBold: return "approvals-bold"
        case .approvalsLight: return "approvals-light"
        case .approvalsRegular: return "approvals-regular"
        case .appsBold: return "apps-bold"
        case .appsFilled: return "apps-filled"
        case .appsLight: return "apps-light"
        case .appsRegular: return "apps-regular"
        case .archiveBold: return "archive-bold"
        case .archiveLight: return "archive-light"
        case .archiveRegular: return "archive-regular"
        case .areaChartBold: return "area-chart-bold"
        case .areaChartFilled: return "area-chart-filled"
        case .areaChartLight: return "area-chart-light"
        case .areaChartRegular: return "area-chart-regular"
        case .areaSelectorBold: return "area-selector-bold"
        case .areaSelectorLight: return "area-selector-light"
        case .areaSelectorRegular: return "area-selector-regular"
        case .arrowCircleDownBold: return "arrow-circle-down-bold"
        case .arrowCircleDownFilled: return "arrow-circle-down-filled"
        case .arrowCircleDownLight: return "arrow-circle-down-light"
        case .arrowCircleDownRegular: return "arrow-circle-down-regular"
        case .arrowCircleLeftBold: return "arrow-circle-left-bold"
        case .arrowCircleLeftFilled: return "arrow-circle-left-filled"
        case .arrowCircleLeftLight: return "arrow-circle-left-light"
        case .arrowCircleLeftRegular: return "arrow-circle-left-regular"
        case .arrowCircleRightBold: return "arrow-circle-right-bold"
        case .arrowCircleRightFilled: return "arrow-circle-right-filled"
        case .arrowCircleRightLight: return "arrow-circle-right-light"
        case .arrowCircleRightRegular: return "arrow-circle-right-regular"
        case .arrowCircleUpBold: return "arrow-circle-up-bold"
        case .arrowCircleUpFilled: return "arrow-circle-up-filled"
        case .arrowCircleUpLight: return "arrow-circle-up-light"
        case .arrowCircleUpRegular: return "arrow-circle-up-regular"
        case .arrowDownBold: return "arrow-down-bold"
        case .arrowDownFilled: return "arrow-down-filled"
        case .arrowDownLight: return "arrow-down-light"
        case .arrowDownRegular: return "arrow-down-regular"
        case .arrowLeftBold: return "arrow-left-bold"
        case .arrowLeftFilled: return "arrow-left-filled"
        case .arrowLeftLight: return "arrow-left-light"
        case .arrowLeftRegular: return "arrow-left-regular"
        case .arrowRightBold: return "arrow-right-bold"
        case .arrowRightFilled: return "arrow-right-filled"
        case .arrowRightLight: return "arrow-right-light"
        case .arrowRightRegular: return "arrow-right-regular"
        case .arrowTailDownBold: return "arrow-tail-down-bold"
        case .arrowTailDownLight: return "arrow-tail-down-light"
        case .arrowTailDownRegular: return "arrow-tail-down-regular"
        case .arrowTailUpBold: return "arrow-tail-up-bold"
        case .arrowTailUpLight: return "arrow-tail-up-light"
        case .arrowTailUpRegular: return "arrow-tail-up-regular"
        case .arrowUpBold: return "arrow-up-bold"
        case .arrowUpFilled: return "arrow-up-filled"
        case .arrowUpLight: return "arrow-up-light"
        case .arrowUpRegular: return "arrow-up-regular"
        case .askForHelpBold: return "ask-for-help-bold"
        case .askForHelpFilled: return "ask-for-help-filled"
        case .askForHelpLight: return "ask-for-help-light"
        case .askForHelpRegular: return "ask-for-help-regular"
        case .assetsBold: return "assets-bold"
        case .assetsFilled: return "assets-filled"
        case .assetsLight: return "assets-light"
        case .assetsRegular: return "assets-regular"
        case .assignHostBold: return "assign-host-bold"
        case .assignHostLight: return "assign-host-light"
        case .assignHostRegular: return "assign-host-regular"
        case .assignPrivilegeBold: return "assign-privilege-bold"
        case .assignPrivilegeFilled: return "assign-privilege-filled"
        case .assignPrivilegeLight: return "assign-privilege-light"
        case .assignPrivilegeRegular: return "assign-privilege-regular"
        case .attachmentBold: return "attachment-bold"
        case .attachmentLight: return "attachment-light"
        case .attachmentRegular: return "attachment-regular"
        case .attendantConsoleBold: return "attendant-console-bold"
        case .attendantConsoleFilled: return "attendant-console-filled"
        case .attendantConsoleLight: return "attendant-console-light"
        case .attendantConsoleRegular: return "attendant-console-regular"
        case .audioBroadcastBold: return "audio-broadcast-bold"
        case .audioBroadcastLight: return "audio-broadcast-light"
        case .audioBroadcastRegular: return "audio-broadcast-regular"
        case .audioCallBold: return "audio-call-bold"
        case .audioCallFilled: return "audio-call-filled"
        case .audioCallLight: return "audio-call-light"
        case .audioCallRegular: return "audio-call-regular"
        case .audioEnhancementBold: return "audio-enhancement-bold"
        case .audioEnhancementFilled: return "audio-enhancement-filled"
        case .audioEnhancementLight: return "audio-enhancement-light"
        case .audioEnhancementRegular: return "audio-enhancement-regular"
        case .audioOnlyBold: return "audio-only-bold"
        case .audioOnlyLight: return "audio-only-light"
        case .audioOnlyRegular: return "audio-only-regular"
        case .audioOptAllBold: return "audio-opt-all-bold"
        case .audioOptAllLight: return "audio-opt-all-light"
        case .audioOptAllRegular: return "audio-opt-all-regular"
        case .audioOptionsBold: return "audio-options-bold"
        case .audioOptionsFilled: return "audio-options-filled"
        case .audioOptionsLight: return "audio-options-light"
        case .audioOptionsRegular: return "audio-options-regular"
        case .autoDetectionBold: return "auto-detection-bold"
        case .autoDetectionLight: return "auto-detection-light"
        case .autoDetectionRegular: return "auto-detection-regular"
        case .automationBold: return "automation-bold"
        case .automationLight: return "automation-light"
        case .automationRegular: return "automation-regular"
        case .awayCallingPresenceBold: return "away-calling-presence-bold"
        case .awayCallingPresenceFilled: return "away-calling-presence-filled"
        case .awayCallingPresenceLight: return "away-calling-presence-light"
        case .awayCallingPresenceRegular: return "away-calling-presence-regular"
        case .backBold: return "back-bold"
        case .backLight: return "back-light"
        case .backRegular: return "back-regular"
        case .backToFullScreenBold: return "back-to-full-screen-bold"
        case .backToFullScreenLight: return "back-to-full-screen-light"
        case .backToFullScreenRegular: return "back-to-full-screen-regular"
        case .backToTopBold: return "back-to-top-bold"
        case .backToTopLight: return "back-to-top-light"
        case .backToTopRegular: return "back-to-top-regular"
        case .backlightBold: return "backlight-bold"
        case .backlightLight: return "backlight-light"
        case .backlightRegular: return "backlight-regular"
        case .backspaceBold: return "backspace-bold"
        case .backspaceLight: return "backspace-light"
        case .backspaceRegular: return "backspace-regular"
        case .backupDataBold: return "backup-data-bold"
        case .backupDataLight: return "backup-data-light"
        case .backupDataRegular: return "backup-data-regular"
        case .barcodeBold: return "barcode-bold"
        case .barcodeLight: return "barcode-light"
        case .barcodeRegular: return "barcode-regular"
        case .batteryChargingBold: return "battery-charging-bold"
        case .batteryChargingLight: return "battery-charging-light"
        case .batteryChargingRegular: return "battery-charging-regular"
        case .batteryEmptyBold: return "battery-empty-bold"
        case .batteryEmptyLight: return "battery-empty-light"
        case .batteryEmptyRegular: return "battery-empty-regular"
        case .batteryHighBold: return "battery-high-bold"
        case .batteryHighLight: return "battery-high-light"
        case .batteryHighRegular: return "battery-high-regular"
        case .batteryLowBold: return "battery-low-bold"
        case .batteryLowLight: return "battery-low-light"
        case .batteryLowRegular: return "battery-low-regular"
        case .batteryMediumBold: return "battery-medium-bold"
        case .batteryMediumLight: return "battery-medium-light"
        case .batteryMediumRegular: return "battery-medium-regular"
        case .bitmojiConnectBold: return "bitmoji-connect-bold"
        case .bitmojiConnectLight: return "bitmoji-connect-light"
        case .bitmojiConnectRegular: return "bitmoji-connect-regular"
        case .bitmojiConnectedBold: return "bitmoji-connected-bold"
        case .bitmojiConnectedFilled: return "bitmoji-connected-filled"
        case .bitmojiConnectedLight: return "bitmoji-connected-light"
        case .bitmojiConnectedRegular: return "bitmoji-connected-regular"
        case .blindTransferBold: return "blind-transfer-bold"
        case .blindTransferLight: return "blind-transfer-light"
        case .blindTransferRegular: return "blind-transfer-regular"
        case .blockQuoteBold: return "block-quote-bold"
        case .blockQuoteLight: return "block-quote-light"
        case .blockQuoteRegular: return "block-quote-regular"
        case .blockedBold: return "blocked-bold"
        case .blockedLight: return "blocked-light"
        case .blockedRegular: return "blocked-regular"
        case .bluetoothBold: return "bluetooth-bold"
        case .bluetoothFilled: return "bluetooth-filled"
        case .bluetoothLight: return "bluetooth-light"
        case .bluetoothMutedBold: return "bluetooth-muted-bold"
        case .bluetoothMutedLight: return "bluetooth-muted-light"
        case .bluetoothMutedRegular: return "bluetooth-muted-regular"
        case .bluetoothRegular: return "bluetooth-regular"
        case .boldBold: return "bold-bold"
        case .boldFilled: return "bold-filled"
        case .boldLight: return "bold-light"
        case .boldRegular: return "bold-regular"
        case .bookmarkBold: return "bookmark-bold"
        case .bookmarkLight: return "bookmark-light"
        case .bookmarkRegular: return "bookmark-regular"
        case .botBold: return "bot-bold"
        case .botCustomerAssistantBold: return "bot-customer-assistant-bold"
        case .botCustomerAssistantLight: return "bot-customer-assistant-light"
        case .botCustomerAssistantRegular: return "bot-customer-assistant-regular"
        case .botExpertAssistantBold: return "bot-expert-assistant-bold"
        case .botExpertAssistantLight: return "bot-expert-assistant-light"
        case .botExpertAssistantRegular: return "bot-expert-assistant-regular"
        case .botLight: return "bot-light"
        case .botRegular: return "bot-regular"
        case .boxBold: return "box-bold"
        case .boxLight: return "box-light"
        case .boxRegular: return "box-regular"
        case .breakoutSessionBold: return "breakout-session-bold"
        case .breakoutSessionFilled: return "breakout-session-filled"
        case .breakoutSessionLight: return "breakout-session-light"
        case .breakoutSessionRegular: return "breakout-session-regular"
        case .brightnessBold: return "brightness-bold"
        case .brightnessHighBold: return "brightness-high-bold"
        case .brightnessHighLight: return "brightness-high-light"
        case .brightnessHighRegular: return "brightness-high-regular"
        case .brightnessLight: return "brightness-light"
        case .brightnessRegular: return "brightness-regular"
        case .brokenFileBold: return "broken-file-bold"
        case .brokenFileFilled: return "broken-file-filled"
        case .brokenFileLight: return "broken-file-light"
        case .brokenFileRegular: return "broken-file-regular"
        case .browserBold: return "browser-bold"
        case .browserLight: return "browser-light"
        case .browserRegular: return "browser-regular"
        case .busyPresenceBold: return "busy-presence-bold"
        case .busyPresenceLight: return "busy-presence-light"
        case .busyPresenceRegular: return "busy-presence-regular"
        case .buttonCursorBold: return "button-cursor-bold"
        case .buttonCursorLight: return "button-cursor-light"
        case .buttonCursorRegular: return "button-cursor-regular"
        case .calendarAddBold: return "calendar-add-bold"
        case .calendarAddFilled: return "calendar-add-filled"
        case .calendarAddLight: return "calendar-add-light"
        case .calendarAddRegular: return "calendar-add-regular"
        case .calendarDayBold: return "calendar-day-bold"
        case .calendarDayFilled: return "calendar-day-filled"
        case .calendarDayLight: return "calendar-day-light"
        case .calendarDayRegular: return "calendar-day-regular"
        case .calendarEmptyBold: return "calendar-empty-bold"
        case .calendarEmptyFilled: return "calendar-empty-filled"
        case .calendarEmptyLight: return "calendar-empty-light"
        case .calendarEmptyRegular: return "calendar-empty-regular"
        case .calendarExternalBold: return "calendar-external-bold"
        case .calendarExternalLight: return "calendar-external-light"
        case .calendarExternalRegular: return "calendar-external-regular"
        case .calendarFilterBold: return "calendar-filter-bold"
        case .calendarFilterLight: return "calendar-filter-light"
        case .calendarFilterRegular: return "calendar-filter-regular"
        case .calendarMonthBold: return "calendar-month-bold"
        case .calendarMonthFilled: return "calendar-month-filled"
        case .calendarMonthLight: return "calendar-month-light"
        case .calendarMonthMoreBold: return "calendar-month-more-bold"
        case .calendarMonthMoreLight: return "calendar-month-more-light"
        case .calendarMonthMoreRegular: return "calendar-month-more-regular"
        case .calendarMonthRegular: return "calendar-month-regular"
        case .calendarTodayBold: return "calendar-today-bold"
        case .calendarTodayLight: return "calendar-today-light"
        case .calendarTodayRegular: return "calendar-today-regular"
        case .calendarWeekBold: return "calendar-week-bold"
        case .calendarWeekFilled: return "calendar-week-filled"
        case .calendarWeekLight: return "calendar-week-light"
        case .calendarWeekRegular: return "calendar-week-regular"
        case .calendarWeekViewBold: return "calendar-week-view-bold"
        case .calendarWeekViewFilled: return "calendar-week-view-filled"
        case .calendarWeekViewLight: return "calendar-week-view-light"
        case .calendarWeekViewRegular: return "calendar-week-view-regular"
        case .calendarWorkWeekBold: return "calendar-work-week-bold"
        case .calendarWorkWeekFilled: return "calendar-work-week-filled"
        case .calendarWorkWeekLight: return "calendar-work-week-light"
        case .calendarWorkWeekRegular: return "calendar-work-week-regular"
        case .callBargeBold: return "call-barge-bold"
        case .callBargeFilled: return "call-barge-filled"
        case .callBargeLight: return "call-barge-light"
        case .callBargeRegular: return "call-barge-regular"
        case .callBargeSilentBold: return "call-barge-silent-bold"
        case .callBargeSilentLight: return "call-barge-silent-light"
        case .callBargeSilentRegular: return "call-barge-silent-regular"
        case .callForwardSettingsBold: return "call-forward-settings-bold"
        case .callForwardSettingsFilled: return "call-forward-settings-filled"
        case .callForwardSettingsLight: return "call-forward-settings-light"
        case .callForwardSettingsRegular: return "call-forward-settings-regular"
        case .callGroupPickupBold: return "call-group-pickup-bold"
        case .callGroupPickupFilled: return "call-group-pickup-filled"
        case .callGroupPickupLight: return "call-group-pickup-light"
        case .callGroupPickupRegular: return "call-group-pickup-regular"
        case .callHandlingBold: return "call-handling-bold"
        case .callHandlingLight: return "call-handling-light"
        case .callHandlingRegular: return "call-handling-regular"
        case .callHoldBold: return "call-hold-bold"
        case .callHoldFilled: return "call-hold-filled"
        case .callHoldLight: return "call-hold-light"
        case .callHoldRegular: return "call-hold-regular"
        case .callIncomingBold: return "call-incoming-bold"
        case .callIncomingLight: return "call-incoming-light"
        case .callIncomingRegular: return "call-incoming-regular"
        case .callListBold: return "call-list-bold"
        case .callListLight: return "call-list-light"
        case .callListRegular: return "call-list-regular"
        case .callMergeBold: return "call-merge-bold"
        case .callMergeLight: return "call-merge-light"
        case .callMergeRegular: return "call-merge-regular"
        case .callMissedBold: return "call-missed-bold"
        case .callMissedFilled: return "call-missed-filled"
        case .callMissedLight: return "call-missed-light"
        case .callMissedRegular: return "call-missed-regular"
        case .callMoreBold: return "call-more-bold"
        case .callMoreLight: return "call-more-light"
        case .callMoreRegular: return "call-more-regular"
        case .callOutgoingBold: return "call-outgoing-bold"
        case .callOutgoingLight: return "call-outgoing-light"
        case .callOutgoingRegular: return "call-outgoing-regular"
        case .callPickupBold: return "call-pickup-bold"
        case .callPickupFilled: return "call-pickup-filled"
        case .callPickupLight: return "call-pickup-light"
        case .callPickupOtherBold: return "call-pickup-other-bold"
        case .callPickupOtherFilled: return "call-pickup-other-filled"
        case .callPickupOtherLight: return "call-pickup-other-light"
        case .callPickupOtherRegular: return "call-pickup-other-regular"
        case .callPickupRegular: return "call-pickup-regular"
        case .callPrivateBold: return "call-private-bold"
        case .callPrivateFilled: return "call-private-filled"
        case .callPrivateLight: return "call-private-light"
        case .callPrivateRegular: return "call-private-regular"
        case .callRemoteBold: return "call-remote-bold"
        case .callRemoteFilled: return "call-remote-filled"
        case .callRemoteLight: return "call-remote-light"
        case .callRemoteRegular: return "call-remote-regular"
        case .callRequestBold: return "call-request-bold"
        case .callRequestFilled: return "call-request-filled"
        case .callRequestLight: return "call-request-light"
        case .callRequestRegular: return "call-request-regular"
        case .callReturnBold: return "call-return-bold"
        case .callReturnFilled: return "call-return-filled"
        case .callReturnLight: return "call-return-light"
        case .callReturnRegular: return "call-return-regular"
        case .callRoomBold: return "call-room-bold"
        case .callRoomLight: return "call-room-light"
        case .callRoomRegular: return "call-room-regular"
        case .callSettingsBold: return "call-settings-bold"
        case .callSettingsLight: return "call-settings-light"
        case .callSettingsRegular: return "call-settings-regular"
        case .callSplitBold: return "call-split-bold"
        case .callSplitLight: return "call-split-light"
        case .callSplitRegular: return "call-split-regular"
        case .callSwapBold: return "call-swap-bold"
        case .callSwapLight: return "call-swap-light"
        case .callSwapRegular: return "call-swap-regular"
        case .callVoicemailBold: return "call-voicemail-bold"
        case .callVoicemailLight: return "call-voicemail-light"
        case .callVoicemailRegular: return "call-voicemail-regular"
        case .callrateBold: return "callrate-bold"
        case .callrateLight: return "callrate-light"
        case .callrateRegular: return "callrate-regular"
        case .cameraAuxBold: return "camera-aux-bold"
        case .cameraAuxFilled: return "camera-aux-filled"
        case .cameraAuxLight: return "camera-aux-light"
        case .cameraAuxRegular: return "camera-aux-regular"
        case .cameraBold: return "camera-bold"
        case .cameraFilled: return "camera-filled"
        case .cameraLight: return "camera-light"
        case .cameraMutedBold: return "camera-muted-bold"
        case .cameraMutedCircleFilled: return "camera-muted-circle-filled"
        case .cameraMutedFilled: return "camera-muted-filled"
        case .cameraMutedLight: return "camera-muted-light"
        case .cameraMutedRegular: return "camera-muted-regular"
        case .cameraOnBold: return "camera-on-bold"
        case .cameraOnFilled: return "camera-on-filled"
        case .cameraOnLight: return "camera-on-light"
        case .cameraOnRegular: return "camera-on-regular"
        case .cameraPhotoBold: return "camera-photo-bold"
        case .cameraPhotoFilled: return "camera-photo-filled"
        case .cameraPhotoLight: return "camera-photo-light"
        case .cameraPhotoRegular: return "camera-photo-regular"
        case .cameraPresenceBold: return "camera-presence-bold"
        case .cameraPresenceFilled: return "camera-presence-filled"
        case .cameraPresenceLight: return "camera-presence-light"
        case .cameraPresenceRegular: return "camera-presence-regular"
        case .cameraRegular: return "camera-regular"
        case .cameraSwapBold: return "camera-swap-bold"
        case .cameraSwapLight: return "camera-swap-light"
        case .cameraSwapRegular: return "camera-swap-regular"
        case .campaignManagementBold: return "campaign-management-bold"
        case .campaignManagementLight: return "campaign-management-light"
        case .campaignManagementRegular: return "campaign-management-regular"
        case .cancelBold: return "cancel-bold"
        case .cancelLight: return "cancel-light"
        case .cancelRegular: return "cancel-regular"
        case .capsLockBold: return "caps-lock-bold"
        case .capsLockLight: return "caps-lock-light"
        case .capsLockRegular: return "caps-lock-regular"
        case .captureRewindBold: return "capture-rewind-bold"
        case .captureRewindLight: return "capture-rewind-light"
        case .captureRewindRegular: return "capture-rewind-regular"
        case .caroselBold: return "carosel-bold"
        case .caroselLight: return "carosel-light"
        case .caroselRegular: return "carosel-regular"
        case .carouselTextBold: return "carousel-text-bold"
        case .carouselTextLight: return "carousel-text-light"
        case .carouselTextRegular: return "carousel-text-regular"
        case .cellularBold: return "cellular-bold"
        case .cellularLight: return "cellular-light"
        case .cellularRegular: return "cellular-regular"
        case .centerAlignedBold: return "center-aligned-bold"
        case .centerAlignedLight: return "center-aligned-light"
        case .centerAlignedRegular: return "center-aligned-regular"
        case .centerBold: return "center-bold"
        case .centerLight: return "center-light"
        case .centerRegular: return "center-regular"
        case .certificateBold: return "certificate-bold"
        case .certificateInvalidBold: return "certificate-invalid-bold"
        case .certificateInvalidLight: return "certificate-invalid-light"
        case .certificateInvalidRegular: return "certificate-invalid-regular"
        case .certificateLight: return "certificate-light"
        case .certificateRegular: return "certificate-regular"
        case .certifiedBold: return "certified-bold"
        case .certifiedLight: return "certified-light"
        case .certifiedRegular: return "certified-regular"
        case .chPSearchBold: return "ch-p-search-bold"
        case .chPSearchLight: return "ch-p-search-light"
        case .chPSearchRegular: return "ch-p-search-regular"
        case .channelUssdBold: return "channel-ussd-bold"
        case .channelUssdLight: return "channel-ussd-light"
        case .channelUssdRegular: return "channel-ussd-regular"
        case .chatBold: return "chat-bold"
        case .chatFilled: return "chat-filled"
        case .chatGroupBold: return "chat-group-bold"
        case .chatGroupFilled: return "chat-group-filled"
        case .chatGroupLight: return "chat-group-light"
        case .chatGroupRegular: return "chat-group-regular"
        case .chatLight: return "chat-light"
        case .chatMuteBold: return "chat-mute-bold"
        case .chatMuteLight: return "chat-mute-light"
        case .chatMuteRegular: return "chat-mute-regular"
        case .chatRegular: return "chat-regular"
        case .checkBold: return "check-bold"
        case .checkCircleBadgeFilled: return "check-circle-badge-filled"
        case .checkCircleBold: return "check-circle-bold"
        case .checkCircleFilled: return "check-circle-filled"
        case .checkCircleLight: return "check-circle-light"
        case .checkCircleRegular: return "check-circle-regular"
        case .checkLight: return "check-light"
        case .checkRegular: return "check-regular"
        case .checkboxGroupBold: return "checkbox-group-bold"
        case .checkboxGroupLight: return "checkbox-group-light"
        case .checkboxGroupRegular: return "checkbox-group-regular"
        case .ciscoAiAssistantDefault: return "cisco-ai-assistant-default"
        case .ciscoAiAssistantInactive: return "cisco-ai-assistant-inactive"
        case .ciscoAiAssistantSolidBold: return "cisco-ai-assistant-solid-bold"
        case .cleanUpBold: return "clean-up-bold"
        case .cleanUpLight: return "clean-up-light"
        case .cleanUpRegular: return "clean-up-regular"
        case .clearBadgeFilled: return "clear-badge-filled"
        case .clearBold: return "clear-bold"
        case .clearFilled: return "clear-filled"
        case .clearLight: return "clear-light"
        case .clearRegular: return "clear-regular"
        case .closeSpaceBold: return "close-space-bold"
        case .closeSpaceLight: return "close-space-light"
        case .closeSpaceRegular: return "close-space-regular"
        case .closedCaptionBadgeBold: return "closed-caption-badge-bold"
        case .closedCaptionBadgeFilled: return "closed-caption-badge-filled"
        case .closedCaptionBadgeLight: return "closed-caption-badge-light"
        case .closedCaptionBadgeRegular: return "closed-caption-badge-regular"
        case .closedCaptionsBold: return "closed-captions-bold"
        case .closedCaptionsFilled: return "closed-captions-filled"
        case .closedCaptionsLight: return "closed-captions-light"
        case .closedCaptionsRegular: return "closed-captions-regular"
        case .cloudBold: return "cloud-bold"
        case .cloudDownloadBold: return "cloud-download-bold"
        case .cloudDownloadLight: return "cloud-download-light"
        case .cloudDownloadRegular: return "cloud-download-regular"
        case .cloudFilled: return "cloud-filled"
        case .cloudFrameBold: return "cloud-frame-bold"
        case .cloudFrameFilled: return "cloud-frame-filled"
        case .cloudFrameLight: return "cloud-frame-light"
        case .cloudFrameRegular: return "cloud-frame-regular"
        case .cloudLight: return "cloud-light"
        case .cloudMutedBold: return "cloud-muted-bold"
        case .cloudMutedFilled: return "cloud-muted-filled"
        case .cloudMutedLight: return "cloud-muted-light"
        case .cloudMutedRegular: return "cloud-muted-regular"
        case .cloudRegular: return "cloud-regular"
        case .cloudUploadBold: return "cloud-upload-bold"
        case .cloudUploadLight: return "cloud-upload-light"
        case .cloudUploadRegular: return "cloud-upload-regular"
        case .codeBlockBold: return "code-block-bold"
        case .codeBlockLight: return "code-block-light"
        case .codeBlockRegular: return "code-block-regular"
        case .coffeeBold: return "coffee-bold"
        case .coffeeLight: return "coffee-light"
        case .coffeeRegular: return "coffee-regular"
        case .colorBold: return "color-bold"
        case .colorFilled: return "color-filled"
        case .colorLight: return "color-light"
        case .colorRegular: return "color-regular"
        case .colourPaletteBold: return "colour-palette-bold"
        case .colourPaletteFilled: return "colour-palette-filled"
        case .colourPaletteLight: return "colour-palette-light"
        case .colourPaletteRegular: return "colour-palette-regular"
        case .commentingBold: return "commenting-bold"
        case .commentingFilled: return "commenting-filled"
        case .commentingLight: return "commenting-light"
        case .commentingRegular: return "commenting-regular"
        case .companyBold: return "company-bold"
        case .companyLight: return "company-light"
        case .companyRegular: return "company-regular"
        case .completedByBaseBold: return "completed-by-base-bold"
        case .completedByBaseLight: return "completed-by-base-light"
        case .completedByBaseRegular: return "completed-by-base-regular"
        case .completedByTimeBold: return "completed-by-time-bold"
        case .completedByTimeLight: return "completed-by-time-light"
        case .completedByTimeRegular: return "completed-by-time-regular"
        case .computerBold: return "computer-bold"
        case .computerLight: return "computer-light"
        case .computerRegular: return "computer-regular"
        case .conciergeBold: return "concierge-bold"
        case .conciergeLight: return "concierge-light"
        case .conciergeRegular: return "concierge-regular"
        case .conditionalBlockBold: return "conditional-block-bold"
        case .conditionalBlockLight: return "conditional-block-light"
        case .conditionalBlockRegular: return "conditional-block-regular"
        case .connectBold: return "connect-bold"
        case .connectLight: return "connect-light"
        case .connectRegular: return "connect-regular"
        case .contactCardBold: return "contact-card-bold"
        case .contactCardFilled: return "contact-card-filled"
        case .contactCardLight: return "contact-card-light"
        case .contactCardRegular: return "contact-card-regular"
        case .contactsBold: return "contacts-bold"
        case .contactsFilled: return "contacts-filled"
        case .contactsLight: return "contacts-light"
        case .contactsRegular: return "contacts-regular"
        case .contentDownloadBold: return "content-download-bold"
        case .contentDownloadFilled: return "content-download-filled"
        case .contentDownloadLight: return "content-download-light"
        case .contentDownloadRegular: return "content-download-regular"
        case .contentShareBold: return "content-share-bold"
        case .contentShareLight: return "content-share-light"
        case .contentShareRegular: return "content-share-regular"
        case .contrastBold: return "contrast-bold"
        case .contrastLight: return "contrast-light"
        case .contrastRegular: return "contrast-regular"
        case .copyBold: return "copy-bold"
        case .copyLight: return "copy-light"
        case .copyRegular: return "copy-regular"
        case .cpuBold: return "cpu-bold"
        case .cpuLight: return "cpu-light"
        case .cpuRegular: return "cpu-regular"
        case .createAGroupBold: return "create-a-group-bold"
        case .createAGroupFilled: return "create-a-group-filled"
        case .createAGroupLight: return "create-a-group-light"
        case .createAGroupRegular: return "create-a-group-regular"
        case .cropBold: return "crop-bold"
        case .cropLight: return "crop-light"
        case .cropRegular: return "crop-regular"
        case .cucmConnectionBold: return "cucm-connection-bold"
        case .cucmConnectionLight: return "cucm-connection-light"
        case .cucmConnectionRegular: return "cucm-connection-regular"
        case .customCodeEditorBold: return "custom-code-editor-bold"
        case .customCodeEditorLight: return "custom-code-editor-light"
        case .customCodeEditorRegular: return "custom-code-editor-regular"
        case .dailyRecurringScheduleBold: return "daily-recurring-schedule-bold"
        case .dailyRecurringScheduleLight: return "daily-recurring-schedule-light"
        case .dailyRecurringScheduleRegular: return "daily-recurring-schedule-regular"
        case .dashboardBold: return "dashboard-bold"
        case .dashboardFilled: return "dashboard-filled"
        case .dashboardLight: return "dashboard-light"
        case .dashboardRegular: return "dashboard-regular"
        case .dataManagementBold: return "data-management-bold"
        case .dataManagementFilled: return "data-management-filled"
        case .dataManagementLight: return "data-management-light"
        case .dataManagementRegular: return "data-management-regular"
        case .dataRangeSelectionBold: return "data-range-selection-bold"
        case .dataRangeSelectionFilled: return "data-range-selection-filled"
        case .dataRangeSelectionLight: return "data-range-selection-light"
        case .dataRangeSelectionRegular: return "data-range-selection-regular"
        case .declineBold: return "decline-bold"
        case .declineFilled: return "decline-filled"
        case .declineLight: return "decline-light"
        case .declineRegular: return "decline-regular"
        case .deleteBold: return "delete-bold"
        case .deleteFilled: return "delete-filled"
        case .deleteLight: return "delete-light"
        case .deleteRegular: return "delete-regular"
        case .deploymentEvaluationProgressBold: return "deployment-evaluation-progress-bold"
        case .deploymentEvaluationProgressLight: return "deployment-evaluation-progress-light"
        case .deploymentEvaluationProgressRegular: return "deployment-evaluation-progress-regular"
        case .deploymentProgressBold: return "deployment-progress-bold"
        case .deploymentProgressLight: return "deployment-progress-light"
        case .deploymentProgressRegular: return "deployment-progress-regular"
        case .deploymentRecurringBold: return "deployment-recurring-bold"
        case .deploymentRecurringLight: return "deployment-recurring-light"
        case .deploymentRecurringRegular: return "deployment-recurring-regular"
        case .deploymentWinnerPendingBold: return "deployment-winner-pending-bold"
        case .deploymentWinnerPendingLight: return "deployment-winner-pending-light"
        case .deploymentWinnerPendingRegular: return "deployment-winner-pending-regular"
        case .deskPhoneBold: return "desk-phone-bold"
        case .deskPhoneFilled: return "desk-phone-filled"
        case .deskPhoneLight: return "desk-phone-light"
        case .deskPhoneRegular: return "desk-phone-regular"
        case .deskPhoneWarningBold: return "desk-phone-warning-bold"
        case .deskPhoneWarningLight: return "desk-phone-warning-light"
        case .deskPhoneWarningRegular: return "desk-phone-warning-regular"
        case .deviceConnectionBold: return "device-connection-bold"
        case .deviceConnectionFilled: return "device-connection-filled"
        case .deviceConnectionLight: return "device-connection-light"
        case .deviceConnectionRegular: return "device-connection-regular"
        case .deviceInRoomBold: return "device-in-room-bold"
        case .deviceInRoomEndBold: return "device-in-room-end-bold"
        case .deviceInRoomEndLight: return "device-in-room-end-light"
        case .deviceInRoomEndRegular: return "device-in-room-end-regular"
        case .deviceInRoomFilled: return "device-in-room-filled"
        case .deviceInRoomLight: return "device-in-room-light"
        case .deviceInRoomRegular: return "device-in-room-regular"
        case .deviceMutedBold: return "device-muted-bold"
        case .deviceMutedLight: return "device-muted-light"
        case .deviceMutedRegular: return "device-muted-regular"
        case .devicePolicyControllerBold: return "device-policy-controller-bold"
        case .devicePolicyControllerLight: return "device-policy-controller-light"
        case .devicePolicyControllerRegular: return "device-policy-controller-regular"
        case .diagnosticsBold: return "diagnostics-bold"
        case .diagnosticsLight: return "diagnostics-light"
        case .diagnosticsRegular: return "diagnostics-regular"
        case .dialpadBold: return "dialpad-bold"
        case .dialpadLight: return "dialpad-light"
        case .dialpadRegular: return "dialpad-regular"
        case .directionalPadBold: return "directional-pad-bold"
        case .directionalPadFilled: return "directional-pad-filled"
        case .directionalPadLight: return "directional-pad-light"
        case .directionalPadRegular: return "directional-pad-regular"
        case .directoryBold: return "directory-bold"
        case .directoryLight: return "directory-light"
        case .directoryRegular: return "directory-regular"
        case .disappearingPenBold: return "disappearing-pen-bold"
        case .disappearingPenLight: return "disappearing-pen-light"
        case .disappearingPenRegular: return "disappearing-pen-regular"
        case .discBold: return "disc-bold"
        case .discConnectedBold: return "disc-connected-bold"
        case .discConnectedLight: return "disc-connected-light"
        case .discConnectedRegular: return "disc-connected-regular"
        case .discLight: return "disc-light"
        case .discRegular: return "disc-regular"
        case .disconnectBold: return "disconnect-bold"
        case .disconnectFilled: return "disconnect-filled"
        case .disconnectLight: return "disconnect-light"
        case .disconnectRegular: return "disconnect-regular"
        case .dislikeBold: return "dislike-bold"
        case .dislikeFilled: return "dislike-filled"
        case .dislikeLight: return "dislike-light"
        case .dislikeRegular: return "dislike-regular"
        case .displayBold: return "display-bold"
        case .displayInputBold: return "display-input-bold"
        case .displayInputLight: return "display-input-light"
        case .displayInputRegular: return "display-input-regular"
        case .displayLight: return "display-light"
        case .displayRegular: return "display-regular"
        case .displayWarningBold: return "display-warning-bold"
        case .displayWarningLight: return "display-warning-light"
        case .displayWarningRegular: return "display-warning-regular"
        case .distributeHorizontalBold: return "distribute-horizontal-bold"
        case .distributeHorizontalFilled: return "distribute-horizontal-filled"
        case .distributeHorizontalLight: return "distribute-horizontal-light"
        case .distributeHorizontalRegular: return "distribute-horizontal-regular"
        case .distributeVerticallyBold: return "distribute-vertically-bold"
        case .distributeVerticallyFilled: return "distribute-vertically-filled"
        case .distributeVerticallyLight: return "distribute-vertically-light"
        case .distributeVerticallyRegular: return "distribute-vertically-regular"
        case .dndPresenceBadgeFilled: return "dnd-presence-badge-filled"
        case .dndPresenceBold: return "dnd-presence-bold"
        case .dndPresenceFilled: return "dnd-presence-filled"
        case .dndPresenceLight: return "dnd-presence-light"
        case .dndPresenceRegular: return "dnd-presence-regular"
        case .documentBold: return "document-bold"
        case .documentCameraBold: return "document-camera-bold"
        case .documentCameraDisconnectedBold: return "document-camera-disconnected-bold"
        case .documentCameraDisconnectedLight: return "document-camera-disconnected-light"
        case .documentCameraDisconnectedRegular: return "document-camera-disconnected-regular"
        case .documentCameraLight: return "document-camera-light"
        case .documentCameraRegular: return "document-camera-regular"
        case .documentCreateBold: return "document-create-bold"
        case .documentCreateFilled: return "document-create-filled"
        case .documentCreateLight: return "document-create-light"
        case .documentCreateRegular: return "document-create-regular"
        case .documentFilled: return "document-filled"
        case .documentLight: return "document-light"
        case .documentMoveBold: return "document-move-bold"
        case .documentMoveFilled: return "document-move-filled"
        case .documentMoveLight: return "document-move-light"
        case .documentMoveRegular: return "document-move-regular"
        case .documentRegular: return "document-regular"
        case .documentShareBold: return "document-share-bold"
        case .documentShareFilled: return "document-share-filled"
        case .documentShareLight: return "document-share-light"
        case .documentShareRegular: return "document-share-regular"
        case .doneAllBold: return "done-all-bold"
        case .doneAllLight: return "done-all-light"
        case .doneAllRegular: return "done-all-regular"
        case .donutChartBold: return "donut-chart-bold"
        case .donutChartFilled: return "donut-chart-filled"
        case .donutChartLight: return "donut-chart-light"
        case .donutChartRegular: return "donut-chart-regular"
        case .downloadBold: return "download-bold"
        case .downloadFilled: return "download-filled"
        case .downloadLight: return "download-light"
        case .downloadRegular: return "download-regular"
        case .draftBold: return "draft-bold"
        case .draftFilled: return "draft-filled"
        case .draftIndicatorBold: return "draft-indicator-bold"
        case .draftIndicatorSmallFilled: return "draft-indicator-small-filled"
        case .draftLight: return "draft-light"
        case .draftRegular: return "draft-regular"
        case .dragBold: return "drag-bold"
        case .dragLight: return "drag-light"
        case .dragRegular: return "drag-regular"
        case .draggerHorizontalBold: return "dragger-horizontal-bold"
        case .draggerHorizontalLight: return "dragger-horizontal-light"
        case .draggerHorizontalRegular: return "dragger-horizontal-regular"
        case .draggerVerticalBold: return "dragger-vertical-bold"
        case .draggerVerticalLight: return "dragger-vertical-light"
        case .draggerVerticalRegular: return "dragger-vertical-regular"
        case .driveModeBold: return "drive-mode-bold"
        case .driveModeLight: return "drive-mode-light"
        case .driveModeRegular: return "drive-mode-regular"
        case .dropdownBold: return "dropdown-bold"
        case .dropdownLight: return "dropdown-light"
        case .dropdownRegular: return "dropdown-regular"
        case .dxEightyBold: return "dx-eighty-bold"
        case .dxEightyFilled: return "dx-eighty-filled"
        case .dxEightyLight: return "dx-eighty-light"
        case .dxEightyRegular: return "dx-eighty-regular"
        case .dxSeventyBold: return "dx-seventy-bold"
        case .dxSeventyLight: return "dx-seventy-light"
        case .dxSeventyRegular: return "dx-seventy-regular"
        case .editBold: return "edit-bold"
        case .editFilled: return "edit-filled"
        case .editLight: return "edit-light"
        case .editRegular: return "edit-regular"
        case .editablePartialBold: return "editable-partial-bold"
        case .editablePartialLight: return "editable-partial-light"
        case .editablePartialRegular: return "editable-partial-regular"
        case .educationBold: return "education-bold"
        case .educationFilled: return "education-filled"
        case .educationLight: return "education-light"
        case .educationRegular: return "education-regular"
        case .emailBold: return "email-bold"
        case .emailDeliveredBold: return "email-delivered-bold"
        case .emailDeliveredLight: return "email-delivered-light"
        case .emailDeliveredRegular: return "email-delivered-regular"
        case .emailFailureBold: return "email-failure-bold"
        case .emailFailureLight: return "email-failure-light"
        case .emailFailureRegular: return "email-failure-regular"
        case .emailFilled: return "email-filled"
        case .emailInviteBold: return "email-invite-bold"
        case .emailInviteLight: return "email-invite-light"
        case .emailInviteRegular: return "email-invite-regular"
        case .emailLight: return "email-light"
        case .emailOutgoingBold: return "email-outgoing-bold"
        case .emailOutgoingFilled: return "email-outgoing-filled"
        case .emailOutgoingLight: return "email-outgoing-light"
        case .emailOutgoingRegular: return "email-outgoing-regular"
        case .emailReadBold: return "email-read-bold"
        case .emailReadFilled: return "email-read-filled"
        case .emailReadLight: return "email-read-light"
        case .emailReadRegular: return "email-read-regular"
        case .emailRegular: return "email-regular"
        case .emojiExcitedBold: return "emoji-excited-bold"
        case .emojiExcitedFilled: return "emoji-excited-filled"
        case .emojiExcitedLight: return "emoji-excited-light"
        case .emojiExcitedRegular: return "emoji-excited-regular"
        case .emojiHappyBold: return "emoji-happy-bold"
        case .emojiHappyFilled: return "emoji-happy-filled"
        case .emojiHappyLight: return "emoji-happy-light"
        case .emojiHappyRegular: return "emoji-happy-regular"
        case .emojiPassiveBold: return "emoji-passive-bold"
        case .emojiPassiveFilled: return "emoji-passive-filled"
        case .emojiPassiveLight: return "emoji-passive-light"
        case .emojiPassiveRegular: return "emoji-passive-regular"
        case .emojiSadBold: return "emoji-sad-bold"
        case .emojiSadFilled: return "emoji-sad-filled"
        case .emojiSadLight: return "emoji-sad-light"
        case .emojiSadRegular: return "emoji-sad-regular"
        case .emojiUnhappyBold: return "emoji-unhappy-bold"
        case .emojiUnhappyFilled: return "emoji-unhappy-filled"
        case .emojiUnhappyLight: return "emoji-unhappy-light"
        case .emojiUnhappyRegular: return "emoji-unhappy-regular"
        case .encryptionCircleFilled: return "encryption-circle-filled"
        case .encryptionFilled: return "encryption-filled"
        case .endRemoteDesktopControlBold: return "end-remote-desktop-control-bold"
        case .endRemoteDesktopControlLight: return "end-remote-desktop-control-light"
        case .endRemoteDesktopControlRegular: return "end-remote-desktop-control-regular"
        case .endToEndEncryptionCircleFilled: return "end-to-end-encryption-circle-filled"
        case .endToEndEncryptionFilled: return "end-to-end-encryption-filled"
        case .endpointBlockedBold: return "endpoint-blocked-bold"
        case .endpointBlockedLight: return "endpoint-blocked-light"
        case .endpointBlockedRegular: return "endpoint-blocked-regular"
        case .endpointBold: return "endpoint-bold"
        case .endpointGTwoBold: return "endpoint-g-two-bold"
        case .endpointGTwoLight: return "endpoint-g-two-light"
        case .endpointGTwoRegular: return "endpoint-g-two-regular"
        case .endpointGTwoSeventyBold: return "endpoint-g-two-seventy-bold"
        case .endpointGTwoSeventyDualBold: return "endpoint-g-two-seventy-dual-bold"
        case .endpointGTwoSeventyDualLight: return "endpoint-g-two-seventy-dual-light"
        case .endpointGTwoSeventyDualRegular: return "endpoint-g-two-seventy-dual-regular"
        case .endpointGTwoSeventyLight: return "endpoint-g-two-seventy-light"
        case .endpointGTwoSeventyRegular: return "endpoint-g-two-seventy-regular"
        case .endpointGTwoStandBold: return "endpoint-g-two-stand-bold"
        case .endpointGTwoStandLight: return "endpoint-g-two-stand-light"
        case .endpointGTwoStandRegular: return "endpoint-g-two-stand-regular"
        case .endpointLight: return "endpoint-light"
        case .endpointMxEightHundredBold: return "endpoint-mx-eight-hundred-bold"
        case .endpointMxEightHundredDualBold: return "endpoint-mx-eight-hundred-dual-bold"
        case .endpointMxEightHundredDualLight: return "endpoint-mx-eight-hundred-dual-light"
        case .endpointMxEightHundredDualRegular: return "endpoint-mx-eight-hundred-dual-regular"
        case .endpointMxEightHundredLight: return "endpoint-mx-eight-hundred-light"
        case .endpointMxEightHundredRegular: return "endpoint-mx-eight-hundred-regular"
        case .endpointRegular: return "endpoint-regular"
        case .endpointStandBold: return "endpoint-stand-bold"
        case .endpointStandFilled: return "endpoint-stand-filled"
        case .endpointStandLight: return "endpoint-stand-light"
        case .endpointStandRegular: return "endpoint-stand-regular"
        case .endpointWarningBold: return "endpoint-warning-bold"
        case .endpointWarningLight: return "endpoint-warning-light"
        case .endpointWarningRegular: return "endpoint-warning-regular"
        case .enterBold: return "enter-bold"
        case .enterLight: return "enter-light"
        case .enterRegular: return "enter-regular"
        case .enterRoomBold: return "enter-room-bold"
        case .enterRoomFilled: return "enter-room-filled"
        case .enterRoomLight: return "enter-room-light"
        case .enterRoomRegular: return "enter-room-regular"
        case .eraserBold: return "eraser-bold"
        case .eraserFilled: return "eraser-filled"
        case .eraserLight: return "eraser-light"
        case .eraserRegular: return "eraser-regular"
        case .errorLegacyBadgeFilled: return "error-legacy-badge-filled"
        case .errorLegacyBold: return "error-legacy-bold"
        case .errorLegacyFilled: return "error-legacy-filled"
        case .errorLegacyLight: return "error-legacy-light"
        case .errorLegacyRegular: return "error-legacy-regular"
        case .ethernetBold: return "ethernet-bold"
        case .ethernetFilled: return "ethernet-filled"
        case .ethernetLight: return "ethernet-light"
        case .ethernetRegular: return "ethernet-regular"
        case .exchangeBold: return "exchange-bold"
        case .exchangeLight: return "exchange-light"
        case .exchangeRegular: return "exchange-regular"
        case .exclamationBold: return "exclamation-bold"
        case .exclamationLight: return "exclamation-light"
        case .exclamationRegular: return "exclamation-regular"
        case .excludeBold: return "exclude-bold"
        case .excludeLight: return "exclude-light"
        case .excludeRegular: return "exclude-regular"
        case .existingTargetGroupBold: return "existing-target-group-bold"
        case .existingTargetGroupLight: return "existing-target-group-light"
        case .existingTargetGroupRegular: return "existing-target-group-regular"
        case .exitRoomBold: return "exit-room-bold"
        case .exitRoomLight: return "exit-room-light"
        case .exitRoomRegular: return "exit-room-regular"
        case .exploreBold: return "explore-bold"
        case .exploreLight: return "explore-light"
        case .exploreRegular: return "explore-regular"
        case .exportBold: return "export-bold"
        case .exportLight: return "export-light"
        case .exportRegular: return "export-regular"
        case .extensionMobilityBold: return "extension-mobility-bold"
        case .extensionMobilityLight: return "extension-mobility-light"
        case .extensionMobilityRegular: return "extension-mobility-regular"
        case .externalMessageBold: return "external-message-bold"
        case .externalMessageLight: return "external-message-light"
        case .externalMessageRegular: return "external-message-regular"
        case .externalUserBold: return "external-user-bold"
        case .externalUserLight: return "external-user-light"
        case .externalUserRegular: return "external-user-regular"
        case .familyFontBold: return "family-font-bold"
        case .familyFontLight: return "family-font-light"
        case .familyFontRegular: return "family-font-regular"
        case .fastForwardBold: return "fast-forward-bold"
        case .fastForwardLight: return "fast-forward-light"
        case .fastForwardRegular: return "fast-forward-regular"
        case .favoriteBold: return "favorite-bold"
        case .favoriteFilled: return "favorite-filled"
        case .favoriteLight: return "favorite-light"
        case .favoriteRegular: return "favorite-regular"
        case .favoritesBold: return "favorites-bold"
        case .favoritesFilled: return "favorites-filled"
        case .favoritesLight: return "favorites-light"
        case .favoritesRegular: return "favorites-regular"
        case .fbwBold: return "fbw-bold"
        case .fbwFilled: return "fbw-filled"
        case .fbwLight: return "fbw-light"
        case .fbwRegular: return "fbw-regular"
        case .ffwBold: return "ffw-bold"
        case .ffwFilled: return "ffw-filled"
        case .ffwLight: return "ffw-light"
        case .ffwRegular: return "ffw-regular"
        case .fileAnalysisBold: return "file-analysis-bold"
        case .fileAnalysisFilled: return "file-analysis-filled"
        case .fileAnalysisLight: return "file-analysis-light"
        case .fileAnalysisRegular: return "file-analysis-regular"
        case .fileAnnotationBold: return "file-annotation-bold"
        case .fileAnnotationFilled: return "file-annotation-filled"
        case .fileAnnotationLight: return "file-annotation-light"
        case .fileAnnotationRegular: return "file-annotation-regular"
        case .fileAudioBold: return "file-audio-bold"
        case .fileAudioFilled: return "file-audio-filled"
        case .fileAudioLight: return "file-audio-light"
        case .fileAudioRegular: return "file-audio-regular"
        case .fileBugBold: return "file-bug-bold"
        case .fileBugFilled: return "file-bug-filled"
        case .fileBugLight: return "file-bug-light"
        case .fileBugRegular: return "file-bug-regular"
        case .fileCodeBold: return "file-code-bold"
        case .fileCodeFilled: return "file-code-filled"
        case .fileCodeLight: return "file-code-light"
        case .fileCodeRegular: return "file-code-regular"
        case .fileDashboardBold: return "file-dashboard-bold"
        case .fileDashboardFilled: return "file-dashboard-filled"
        case .fileDashboardLight: return "file-dashboard-light"
        case .fileDashboardRegular: return "file-dashboard-regular"
        case .fileExcelBold: return "file-excel-bold"
        case .fileExcelFilled: return "file-excel-filled"
        case .fileExcelLight: return "file-excel-light"
        case .fileExcelRegular: return "file-excel-regular"
        case .fileGraphBold: return "file-graph-bold"
        case .fileGraphFilled: return "file-graph-filled"
        case .fileGraphLight: return "file-graph-light"
        case .fileGraphRegular: return "file-graph-regular"
        case .fileImageBold: return "file-image-bold"
        case .fileImageFilled: return "file-image-filled"
        case .fileImageLight: return "file-image-light"
        case .fileImageNoneBold: return "file-image-none-bold"
        case .fileImageNoneLight: return "file-image-none-light"
        case .fileImageNoneRegular: return "file-image-none-regular"
        case .fileImageRegular: return "file-image-regular"
        case .fileKeynoteBold: return "file-keynote-bold"
        case .fileKeynoteFilled: return "file-keynote-filled"
        case .fileKeynoteLight: return "file-keynote-light"
        case .fileKeynoteRegular: return "file-keynote-regular"
        case .fileLockedBold: return "file-locked-bold"
        case .fileLockedFilled: return "file-locked-filled"
        case .fileLockedLight: return "file-locked-light"
        case .fileLockedRegular: return "file-locked-regular"
        case .fileMissingBold: return "file-missing-bold"
        case .fileMissingFilled: return "file-missing-filled"
        case .fileMissingLight: return "file-missing-light"
        case .fileMissingRegular: return "file-missing-regular"
        case .fileMusicBold: return "file-music-bold"
        case .fileMusicFilled: return "file-music-filled"
        case .fileMusicLight: return "file-music-light"
        case .fileMusicRegular: return "file-music-regular"
        case .fileOnenoteBold: return "file-onenote-bold"
        case .fileOnenoteFilled: return "file-onenote-filled"
        case .fileOnenoteLight: return "file-onenote-light"
        case .fileOnenoteRegular: return "file-onenote-regular"
        case .filePdfBold: return "file-pdf-bold"
        case .filePdfFilled: return "file-pdf-filled"
        case .filePdfLight: return "file-pdf-light"
        case .filePdfRegular: return "file-pdf-regular"
        case .filePowerpointBold: return "file-powerpoint-bold"
        case .filePowerpointFilled: return "file-powerpoint-filled"
        case .filePowerpointLight: return "file-powerpoint-light"
        case .filePowerpointRegular: return "file-powerpoint-regular"
        case .fileSpreadsheetBold: return "file-spreadsheet-bold"
        case .fileSpreadsheetFilled: return "file-spreadsheet-filled"
        case .fileSpreadsheetLight: return "file-spreadsheet-light"
        case .fileSpreadsheetRegular: return "file-spreadsheet-regular"
        case .fileTextBold: return "file-text-bold"
        case .fileTextFilled: return "file-text-filled"
        case .fileTextLight: return "file-text-light"
        case .fileTextRegular: return "file-text-regular"
        case .fileThreeDBold: return "file-three-d-bold"
        case .fileThreeDFilled: return "file-three-d-filled"
        case .fileThreeDLight: return "file-three-d-light"
        case .fileThreeDRegular: return "file-three-d-regular"
        case .fileVectorBold: return "file-vector-bold"
        case .fileVectorFilled: return "file-vector-filled"
        case .fileVectorLight: return "file-vector-light"
        case .fileVectorRegular: return "file-vector-regular"
        case .fileVideoBold: return "file-video-bold"
        case .fileVideoFilled: return "file-video-filled"
        case .fileVideoLight: return "file-video-light"
        case .fileVideoRegular: return "file-video-regular"
        case .fileWordBold: return "file-word-bold"
        case .fileWordFilled: return "file-word-filled"
        case .fileWordLight: return "file-word-light"
        case .fileWordRegular: return "file-word-regular"
        case .fileZipBold: return "file-zip-bold"
        case .fileZipFilled: return "file-zip-filled"
        case .fileZipLight: return "file-zip-light"
        case .fileZipRegular: return "file-zip-regular"
        case .filesBold: return "files-bold"
        case .filesFilled: return "files-filled"
        case .filesLight: return "files-light"
        case .filesRegular: return "files-regular"
        case .fillColourBold: return "fill-colour-bold"
        case .fillColourFilled: return "fill-colour-filled"
        case .fillColourLight: return "fill-colour-light"
        case .fillColourRegular: return "fill-colour-regular"
        case .filterBold: return "filter-bold"
        case .filterCircleBold: return "filter-circle-bold"
        case .filterCircleFilled: return "filter-circle-filled"
        case .filterCircleLight: return "filter-circle-light"
        case .filterCircleRegular: return "filter-circle-regular"
        case .filterLight: return "filter-light"
        case .filterRegular: return "filter-regular"
        case .fitToWidthBold: return "fit-to-width-bold"
        case .fitToWidthLight: return "fit-to-width-light"
        case .fitToWidthRegular: return "fit-to-width-regular"
        case .fitToWindowExpandBold: return "fit-to-window-expand-bold"
        case .fitToWindowExpandLight: return "fit-to-window-expand-light"
        case .fitToWindowExpandRegular: return "fit-to-window-expand-regular"
        case .fitToWindowShrinkBold: return "fit-to-window-shrink-bold"
        case .fitToWindowShrinkLight: return "fit-to-window-shrink-light"
        case .fitToWindowShrinkRegular: return "fit-to-window-shrink-regular"
        case .flagBold: return "flag-bold"
        case .flagCircleBold: return "flag-circle-bold"
        case .flagCircleFilled: return "flag-circle-filled"
        case .flagCircleLight: return "flag-circle-light"
        case .flagCircleRegular: return "flag-circle-regular"
        case .flagFilled: return "flag-filled"
        case .flagLight: return "flag-light"
        case .flagRegular: return "flag-regular"
        case .folderBold: return "folder-bold"
        case .folderEditBold: return "folder-edit-bold"
        case .folderEditLight: return "folder-edit-light"
        case .folderEditRegular: return "folder-edit-regular"
        case .folderLight: return "folder-light"
        case .folderLockBold: return "folder-lock-bold"
        case .folderLockLight: return "folder-lock-light"
        case .folderLockRegular: return "folder-lock-regular"
        case .folderRegular: return "folder-regular"
        case .folderViewBold: return "folder-view-bold"
        case .folderViewLight: return "folder-view-light"
        case .folderViewRegular: return "folder-view-regular"
        case .followUpBold: return "follow-up-bold"
        case .followUpLight: return "follow-up-light"
        case .followUpRegular: return "follow-up-regular"
        case .foodBold: return "food-bold"
        case .foodLight: return "food-light"
        case .foodRegular: return "food-regular"
        case .formatBold: return "format-bold"
        case .formatDefaultAppBold: return "format-default-app-bold"
        case .formatDefaultAppFilled: return "format-default-app-filled"
        case .formatDefaultAppLight: return "format-default-app-light"
        case .formatDefaultAppRegular: return "format-default-app-regular"
        case .formatLight: return "format-light"
        case .formatPanelControlBarBold: return "format-panel-control-bar-bold"
        case .formatPanelControlBarLight: return "format-panel-control-bar-light"
        case .formatPanelControlBarRegular: return "format-panel-control-bar-regular"
        case .formatPanelControlDownBold: return "format-panel-control-down-bold"
        case .formatPanelControlDownLight: return "format-panel-control-down-light"
        case .formatPanelControlDownRegular: return "format-panel-control-down-regular"
        case .formatPanelControlLeftBold: return "format-panel-control-left-bold"
        case .formatPanelControlLeftLight: return "format-panel-control-left-light"
        case .formatPanelControlLeftRegular: return "format-panel-control-left-regular"
        case .formatPanelControlRightBold: return "format-panel-control-right-bold"
        case .formatPanelControlRightLight: return "format-panel-control-right-light"
        case .formatPanelControlRightRegular: return "format-panel-control-right-regular"
        case .formatPanelControlUpBold: return "format-panel-control-up-bold"
        case .formatPanelControlUpDownBold: return "format-panel-control-up-down-bold"
        case .formatPanelControlUpDownLight: return "format-panel-control-up-down-light"
        case .formatPanelControlUpDownRegular: return "format-panel-control-up-down-regular"
        case .formatPanelControlUpLight: return "format-panel-control-up-light"
        case .formatPanelControlUpRegular: return "format-panel-control-up-regular"
        case .formatRegular: return "format-regular"
        case .formatViewMixedBold: return "format-view-mixed-bold"
        case .formatViewMixedLight: return "format-view-mixed-light"
        case .formatViewMixedRegular: return "format-view-mixed-regular"
        case .forwardMessageBold: return "forward-message-bold"
        case .forwardMessageFilled: return "forward-message-filled"
        case .forwardMessageLight: return "forward-message-light"
        case .forwardMessageRegular: return "forward-message-regular"
        case .forwardTenSecBold: return "forward-ten-sec-bold"
        case .forwardTenSecLight: return "forward-ten-sec-light"
        case .forwardTenSecRegular: return "forward-ten-sec-regular"
        case .fourColumnBold: return "four-column-bold"
        case .fourColumnLight: return "four-column-light"
        case .fourColumnRegular: return "four-column-regular"
        case .fourWayNavigationBold: return "four-way-navigation-bold"
        case .fourWayNavigationLight: return "four-way-navigation-light"
        case .fourWayNavigationRegular: return "four-way-navigation-regular"
        case .frequencyCappingBold: return "frequency-capping-bold"
        case .frequencyCappingLight: return "frequency-capping-light"
        case .frequencyCappingRegular: return "frequency-capping-regular"
        case .fulfillmentBold: return "fulfillment-bold"
        case .fulfillmentLight: return "fulfillment-light"
        case .fulfillmentRegular: return "fulfillment-regular"
        case .fullscreenBold: return "fullscreen-bold"
        case .fullscreenExitBold: return "fullscreen-exit-bold"
        case .fullscreenExitLight: return "fullscreen-exit-light"
        case .fullscreenExitRegular: return "fullscreen-exit-regular"
        case .fullscreenLight: return "fullscreen-light"
        case .fullscreenRegular: return "fullscreen-regular"
        case .genericDeviceVideoBadgeFilled: return "generic-device-video-badge-filled"
        case .genericDeviceVideoBold: return "generic-device-video-bold"
        case .genericDeviceVideoFilled: return "generic-device-video-filled"
        case .genericDeviceVideoLight: return "generic-device-video-light"
        case .genericDeviceVideoRegular: return "generic-device-video-regular"
        case .gifBold: return "gif-bold"
        case .gifFilled: return "gif-filled"
        case .gifHorizontalBold: return "gif-horizontal-bold"
        case .gifHorizontalFilled: return "gif-horizontal-filled"
        case .gifHorizontalLight: return "gif-horizontal-light"
        case .gifHorizontalRegular: return "gif-horizontal-regular"
        case .gifLight: return "gif-light"
        case .gifRegular: return "gif-regular"
        case .giftBold: return "gift-bold"
        case .giftFilled: return "gift-filled"
        case .giftLight: return "gift-light"
        case .giftRegular: return "gift-regular"
        case .googleMeetColored: return "google-meet-colored"
        case .greenLeafBold: return "green-leaf-bold"
        case .greenLeafFilled: return "green-leaf-filled"
        case .greenLeafLight: return "green-leaf-light"
        case .greenLeafRegular: return "green-leaf-regular"
        case .greenRoomBold: return "green-room-bold"
        case .greenRoomFilled: return "green-room-filled"
        case .greenRoomLight: return "green-room-light"
        case .greenRoomRegular: return "green-room-regular"
        case .guestIssuerBold: return "guest-issuer-bold"
        case .guestIssuerLight: return "guest-issuer-light"
        case .guestIssuerRegular: return "guest-issuer-regular"
        case .guideBold: return "guide-bold"
        case .guideLight: return "guide-light"
        case .guideRegular: return "guide-regular"
        case .handPointerBold: return "hand-pointer-bold"
        case .handPointerLight: return "hand-pointer-light"
        case .handPointerRegular: return "hand-pointer-regular"
        case .handlerBold: return "handler-bold"
        case .handlerHorizontalBold: return "handler-horizontal-bold"
        case .handlerHorizontalLight: return "handler-horizontal-light"
        case .handlerHorizontalRegular: return "handler-horizontal-regular"
        case .handlerLight: return "handler-light"
        case .handlerRegular: return "handler-regular"
        case .handsetAlertBold: return "handset-alert-bold"
        case .handsetAlertFilled: return "handset-alert-filled"
        case .handsetAlertLight: return "handset-alert-light"
        case .handsetAlertRegular: return "handset-alert-regular"
        case .handsetBold: return "handset-bold"
        case .handsetFilled: return "handset-filled"
        case .handsetLight: return "handset-light"
        case .handsetMutedBold: return "handset-muted-bold"
        case .handsetMutedFilled: return "handset-muted-filled"
        case .handsetMutedLight: return "handset-muted-light"
        case .handsetMutedRegular: return "handset-muted-regular"
        case .handsetRegular: return "handset-regular"
        case .handshakeBold: return "handshake-bold"
        case .handshakeLight: return "handshake-light"
        case .handshakeRegular: return "handshake-regular"
        case .headingOneBold: return "heading-one-bold"
        case .headingOneLight: return "heading-one-light"
        case .headingOneRegular: return "heading-one-regular"
        case .headingThreeBold: return "heading-three-bold"
        case .headingThreeLight: return "heading-three-light"
        case .headingThreeRegular: return "heading-three-regular"
        case .headingTwoBold: return "heading-two-bold"
        case .headingTwoLight: return "heading-two-light"
        case .headingTwoRegular: return "heading-two-regular"
        case .headphonesBold: return "headphones-bold"
        case .headphonesFilled: return "headphones-filled"
        case .headphonesLight: return "headphones-light"
        case .headphonesMutedBold: return "headphones-muted-bold"
        case .headphonesMutedFilled: return "headphones-muted-filled"
        case .headphonesMutedLight: return "headphones-muted-light"
        case .headphonesMutedRegular: return "headphones-muted-regular"
        case .headphonesRegular: return "headphones-regular"
        case .headsetAlertBold: return "headset-alert-bold"
        case .headsetAlertLight: return "headset-alert-light"
        case .headsetAlertRegular: return "headset-alert-regular"
        case .headsetBold: return "headset-bold"
        case .headsetFilled: return "headset-filled"
        case .headsetLight: return "headset-light"
        case .headsetMutedBold: return "headset-muted-bold"
        case .headsetMutedLight: return "headset-muted-light"
        case .headsetMutedRegular: return "headset-muted-regular"
        case .headsetPrivateBold: return "headset-private-bold"
        case .headsetPrivateLight: return "headset-private-light"
        case .headsetPrivateRegular: return "headset-private-regular"
        case .headsetRegular: return "headset-regular"
        case .hearingBold: return "hearing-bold"
        case .hearingImpairedBold: return "hearing-impaired-bold"
        case .hearingImpairedLight: return "hearing-impaired-light"
        case .hearingImpairedRegular: return "hearing-impaired-regular"
        case .hearingLight: return "hearing-light"
        case .hearingRegular: return "hearing-regular"
        case .helpBold: return "help-bold"
        case .helpCircleBold: return "help-circle-bold"
        case .helpCircleFilled: return "help-circle-filled"
        case .helpCircleLight: return "help-circle-light"
        case .helpCircleRegular: return "help-circle-regular"
        case .helpLight: return "help-light"
        case .helpRegular: return "help-regular"
        case .helpdeskBold: return "helpdesk-bold"
        case .helpdeskFilled: return "helpdesk-filled"
        case .helpdeskLight: return "helpdesk-light"
        case .helpdeskRegular: return "helpdesk-regular"
        case .hideBold: return "hide-bold"
        case .hideFilled: return "hide-filled"
        case .hideLight: return "hide-light"
        case .hideRegular: return "hide-regular"
        case .homeBold: return "home-bold"
        case .homeFilled: return "home-filled"
        case .homeLight: return "home-light"
        case .homeRegular: return "home-regular"
        case .horizontalLineBold: return "horizontal-line-bold"
        case .horizontalLineLight: return "horizontal-line-light"
        case .horizontalLineRegular: return "horizontal-line-regular"
        case .hotelingBold: return "hoteling-bold"
        case .hotelingFilled: return "hoteling-filled"
        case .hotelingLight: return "hoteling-light"
        case .hotelingRegular: return "hoteling-regular"
        case .humidityBold: return "humidity-bold"
        case .humidityLight: return "humidity-light"
        case .humidityRegular: return "humidity-regular"
        case .huntGroupBold: return "hunt-group-bold"
        case .huntGroupFilled: return "hunt-group-filled"
        case .huntGroupLight: return "hunt-group-light"
        case .huntGroupRegular: return "hunt-group-regular"
        case .idleBold: return "idle-bold"
        case .idleFilled: return "idle-filled"
        case .idleLight: return "idle-light"
        case .idleRegular: return "idle-regular"
        case .immediateBold: return "immediate-bold"
        case .immediateFilled: return "immediate-filled"
        case .immediateLight: return "immediate-light"
        case .immediateRegular: return "immediate-regular"
        case .importBold: return "import-bold"
        case .importLight: return "import-light"
        case .importRegular: return "import-regular"
        case .inCommonBold: return "in-common-bold"
        case .inCommonLight: return "in-common-light"
        case .inCommonRegular: return "in-common-regular"
        case .includeBold: return "include-bold"
        case .includeLight: return "include-light"
        case .includeRegular: return "include-regular"
        case .incognitoBold: return "incognito-bold"
        case .incognitoFilled: return "incognito-filled"
        case .incognitoLight: return "incognito-light"
        case .incognitoRegular: return "incognito-regular"
        case .incomingCallLegacyBold: return "incoming-call-legacy-bold"
        case .incomingCallLegacyFilled: return "incoming-call-legacy-filled"
        case .incomingCallLegacyLight: return "incoming-call-legacy-light"
        case .incomingCallLegacyRegular: return "incoming-call-legacy-regular"
        case .indentDecreaseBold: return "indent-decrease-bold"
        case .indentDecreaseLight: return "indent-decrease-light"
        case .indentDecreaseRegular: return "indent-decrease-regular"
        case .indentIncreaseBold: return "indent-increase-bold"
        case .indentIncreaseLight: return "indent-increase-light"
        case .indentIncreaseRegular: return "indent-increase-regular"
        case .infoBadgeFilled: return "info-badge-filled"
        case .infoCircleBold: return "info-circle-bold"
        case .infoCircleFilled: return "info-circle-filled"
        case .infoCircleLight: return "info-circle-light"
        case .infoCircleRegular: return "info-circle-regular"
        case .infoCircleTwoBold: return "info-circle-two-bold"
        case .infoCircleTwoFilled: return "info-circle-two-filled"
        case .infoCircleTwoLight: return "info-circle-two-light"
        case .infoCircleTwoRegular: return "info-circle-two-regular"
        case .inputBold: return "input-bold"
        case .inputDisconnectedBold: return "input-disconnected-bold"
        case .inputDisconnectedLight: return "input-disconnected-light"
        case .inputDisconnectedRegular: return "input-disconnected-regular"
        case .inputLight: return "input-light"
        case .inputRegular: return "input-regular"
        case .instantScheduleBold: return "instant-schedule-bold"
        case .instantScheduleFilled: return "instant-schedule-filled"
        case .instantScheduleLight: return "instant-schedule-light"
        case .instantScheduleRegular: return "instant-schedule-regular"
        case .integrationsBold: return "integrations-bold"
        case .integrationsLight: return "integrations-light"
        case .integrationsRegular: return "integrations-regular"
        case .intelligentRoutingBold: return "intelligent-routing-bold"
        case .intelligentRoutingLight: return "intelligent-routing-light"
        case .intelligentRoutingRegular: return "intelligent-routing-regular"
        case .invitedUserBold: return "invited-user-bold"
        case .invitedUserLight: return "invited-user-light"
        case .invitedUserRegular: return "invited-user-regular"
        case .italicBold: return "italic-bold"
        case .italicFilled: return "italic-filled"
        case .italicLight: return "italic-light"
        case .italicRegular: return "italic-regular"
        case .joinAudioBold: return "join-audio-bold"
        case .joinAudioFilled: return "join-audio-filled"
        case .joinAudioLight: return "join-audio-light"
        case .joinAudioRegular: return "join-audio-regular"
        case .keepInTouchBold: return "keep-in-touch-bold"
        case .keepInTouchFilled: return "keep-in-touch-filled"
        case .keepInTouchLight: return "keep-in-touch-light"
        case .keepInTouchRegular: return "keep-in-touch-regular"
        case .keyboardBold: return "keyboard-bold"
        case .keyboardCloseBold: return "keyboard-close-bold"
        case .keyboardCloseLight: return "keyboard-close-light"
        case .keyboardCloseRegular: return "keyboard-close-regular"
        case .keyboardLight: return "keyboard-light"
        case .keyboardRegular: return "keyboard-regular"
        case .languageBold: return "language-bold"
        case .languageFilled: return "language-filled"
        case .languageLight: return "language-light"
        case .languageRegular: return "language-regular"
        case .laptopBold: return "laptop-bold"
        case .laptopDisconnectedBold: return "laptop-disconnected-bold"
        case .laptopDisconnectedLight: return "laptop-disconnected-light"
        case .laptopDisconnectedRegular: return "laptop-disconnected-regular"
        case .laptopFilled: return "laptop-filled"
        case .laptopLight: return "laptop-light"
        case .laptopRegular: return "laptop-regular"
        case .laserPointerBold: return "laser-pointer-bold"
        case .laserPointerLight: return "laser-pointer-light"
        case .laserPointerRegular: return "laser-pointer-regular"
        case .launchBold: return "launch-bold"
        case .launchLight: return "launch-light"
        case .launchRegular: return "launch-regular"
        case .layoutSideBySideVerticalBold: return "layout-side-by-side-vertical-bold"
        case .layoutSideBySideVerticalFilled: return "layout-side-by-side-vertical-filled"
        case .layoutSideBySideVerticalLight: return "layout-side-by-side-vertical-light"
        case .layoutSideBySideVerticalRegular: return "layout-side-by-side-vertical-regular"
        case .leaveBreakoutSessionBold: return "leave-breakout-session-bold"
        case .leaveBreakoutSessionLight: return "leave-breakout-session-light"
        case .leaveBreakoutSessionRegular: return "leave-breakout-session-regular"
        case .leaveDeviceBold: return "leave-device-bold"
        case .leaveDeviceLight: return "leave-device-light"
        case .leaveDeviceRegular: return "leave-device-regular"
        case .likeBold: return "like-bold"
        case .likeFilled: return "like-filled"
        case .likeLight: return "like-light"
        case .likeRegular: return "like-regular"
        case .linkBold: return "link-bold"
        case .linkLight: return "link-light"
        case .linkRegular: return "link-regular"
        case .listBulletedBold: return "list-bulleted-bold"
        case .listBulletedLight: return "list-bulleted-light"
        case .listBulletedRegular: return "list-bulleted-regular"
        case .listMenuBold: return "list-menu-bold"
        case .listMenuLight: return "list-menu-light"
        case .listMenuRegular: return "list-menu-regular"
        case .listNumberedBold: return "list-numbered-bold"
        case .listNumberedLight: return "list-numbered-light"
        case .listNumberedRegular: return "list-numbered-regular"
        case .liveBold: return "live-bold"
        case .liveFilled: return "live-filled"
        case .liveLight: return "live-light"
        case .liveRegular: return "live-regular"
        case .locationBold: return "location-bold"
        case .locationFilled: return "location-filled"
        case .locationLight: return "location-light"
        case .locationRegular: return "location-regular"
        case .longTextBoxBold: return "long-text-box-bold"
        case .longTextBoxLight: return "long-text-box-light"
        case .longTextBoxRegular: return "long-text-box-regular"
        case .lowerHandBold: return "lower-hand-bold"
        case .lowerHandLight: return "lower-hand-light"
        case .lowerHandRegular: return "lower-hand-regular"
        case .magicPenBold: return "magic-pen-bold"
        case .magicPenFilled: return "magic-pen-filled"
        case .magicPenLight: return "magic-pen-light"
        case .magicPenRegular: return "magic-pen-regular"
        case .markAsUnreadBold: return "mark-as-unread-bold"
        case .markAsUnreadLight: return "mark-as-unread-light"
        case .markAsUnreadRegular: return "mark-as-unread-regular"
        case .markdownBold: return "markdown-bold"
        case .markdownLight: return "markdown-light"
        case .markdownRegular: return "markdown-regular"
        case .markerBold: return "marker-bold"
        case .markerFilled: return "marker-filled"
        case .markerLight: return "marker-light"
        case .markerRegular: return "marker-regular"
        case .maximizeBold: return "maximize-bold"
        case .maximizeLight: return "maximize-light"
        case .maximizeRegular: return "maximize-regular"
        case .mediaPlayerBold: return "media-player-bold"
        case .mediaPlayerLight: return "media-player-light"
        case .mediaPlayerRegular: return "media-player-regular"
        case .mediaQualityGoodBold: return "media-quality-good-bold"
        case .mediaQualityGoodFilled: return "media-quality-good-filled"
        case .mediaQualityGoodLight: return "media-quality-good-light"
        case .mediaQualityGoodRegular: return "media-quality-good-regular"
        case .mediaQualityPoorBold: return "media-quality-poor-bold"
        case .mediaQualityPoorFilled: return "media-quality-poor-filled"
        case .mediaQualityPoorLight: return "media-quality-poor-light"
        case .mediaQualityPoorRegular: return "media-quality-poor-regular"
        case .mediaQualityUnstableBold: return "media-quality-unstable-bold"
        case .mediaQualityUnstableFilled: return "media-quality-unstable-filled"
        case .mediaQualityUnstableLight: return "media-quality-unstable-light"
        case .mediaQualityUnstableRegular: return "media-quality-unstable-regular"
        case .meetBold: return "meet-bold"
        case .meetEndBold: return "meet-end-bold"
        case .meetEndLight: return "meet-end-light"
        case .meetEndRegular: return "meet-end-regular"
        case .meetFilled: return "meet-filled"
        case .meetLight: return "meet-light"
        case .meetRegular: return "meet-regular"
        case .meetingSummaryBold: return "meeting-summary-bold"
        case .meetingSummaryFilled: return "meeting-summary-filled"
        case .meetingSummaryLight: return "meeting-summary-light"
        case .meetingSummaryRegular: return "meeting-summary-regular"
        case .meetingsBold: return "meetings-bold"
        case .meetingsFilled: return "meetings-filled"
        case .meetingsFocusMonthBold: return "meetings-focus-month-bold"
        case .meetingsFocusMonthLight: return "meetings-focus-month-light"
        case .meetingsFocusMonthRegular: return "meetings-focus-month-regular"
        case .meetingsFocusOneDayBold: return "meetings-focus-one-day-bold"
        case .meetingsFocusOneDayLight: return "meetings-focus-one-day-light"
        case .meetingsFocusOneDayRegular: return "meetings-focus-one-day-regular"
        case .meetingsFocusThreeDayBold: return "meetings-focus-three-day-bold"
        case .meetingsFocusThreeDayLight: return "meetings-focus-three-day-light"
        case .meetingsFocusThreeDayRegular: return "meetings-focus-three-day-regular"
        case .meetingsFocusUpcomingBold: return "meetings-focus-upcoming-bold"
        case .meetingsFocusUpcomingLight: return "meetings-focus-upcoming-light"
        case .meetingsFocusUpcomingRegular: return "meetings-focus-upcoming-regular"
        case .meetingsLight: return "meetings-light"
        case .meetingsPresenceBadgeFilled: return "meetings-presence-badge-filled"
        case .meetingsPresenceBold: return "meetings-presence-bold"
        case .meetingsPresenceFilled: return "meetings-presence-filled"
        case .meetingsPresenceLight: return "meetings-presence-light"
        case .meetingsPresenceRegular: return "meetings-presence-regular"
        case .meetingsRegular: return "meetings-regular"
        case .meetingsTeamBold: return "meetings-team-bold"
        case .meetingsTeamFilled: return "meetings-team-filled"
        case .meetingsTeamLight: return "meetings-team-light"
        case .meetingsTeamNewBold: return "meetings-team-new-bold"
        case .meetingsTeamNewLight: return "meetings-team-new-light"
        case .meetingsTeamNewRegular: return "meetings-team-new-regular"
        case .meetingsTeamRegular: return "meetings-team-regular"
        case .mentionBold: return "mention-bold"
        case .mentionLight: return "mention-light"
        case .mentionRegular: return "mention-regular"
        case .messageQueingBold: return "message-queing-bold"
        case .messageQueingLight: return "message-queing-light"
        case .messageQueingRegular: return "message-queing-regular"
        case .microphoneBold: return "microphone-bold"
        case .microphoneFilled: return "microphone-filled"
        case .microphoneHardMutedBold: return "microphone-hard-muted-bold"
        case .microphoneHardMutedCircleFilled: return "microphone-hard-muted-circle-filled"
        case .microphoneHardMutedLight: return "microphone-hard-muted-light"
        case .microphoneHardMutedRegular: return "microphone-hard-muted-regular"
        case .microphoneLight: return "microphone-light"
        case .microphoneMusicModeBold: return "microphone-music-mode-bold"
        case .microphoneMusicModeLight: return "microphone-music-mode-light"
        case .microphoneMusicModeOnBold: return "microphone-music-mode-on-bold"
        case .microphoneMusicModeOnLight: return "microphone-music-mode-on-light"
        case .microphoneMusicModeOnRegular: return "microphone-music-mode-on-regular"
        case .microphoneMusicModeRegular: return "microphone-music-mode-regular"
        case .microphoneMutedBold: return "microphone-muted-bold"
        case .microphoneMutedCircleFilled: return "microphone-muted-circle-filled"
        case .microphoneMutedFilled: return "microphone-muted-filled"
        case .microphoneMutedLight: return "microphone-muted-light"
        case .microphoneMutedRegular: return "microphone-muted-regular"
        case .microphoneOnBold: return "microphone-on-bold"
        case .microphoneOnLight: return "microphone-on-light"
        case .microphoneOnRegular: return "microphone-on-regular"
        case .microphoneOptAllBold: return "microphone-opt-all-bold"
        case .microphoneOptAllLight: return "microphone-opt-all-light"
        case .microphoneOptAllMutedBold: return "microphone-opt-all-muted-bold"
        case .microphoneOptAllMutedLight: return "microphone-opt-all-muted-light"
        case .microphoneOptAllMutedRegular: return "microphone-opt-all-muted-regular"
        case .microphoneOptAllOnBold: return "microphone-opt-all-on-bold"
        case .microphoneOptAllOnLight: return "microphone-opt-all-on-light"
        case .microphoneOptAllOnRegular: return "microphone-opt-all-on-regular"
        case .microphoneOptAllRegular: return "microphone-opt-all-regular"
        case .microphoneOptMeBold: return "microphone-opt-me-bold"
        case .microphoneOptMeLight: return "microphone-opt-me-light"
        case .microphoneOptMeMutedBold: return "microphone-opt-me-muted-bold"
        case .microphoneOptMeMutedLight: return "microphone-opt-me-muted-light"
        case .microphoneOptMeMutedRegular: return "microphone-opt-me-muted-regular"
        case .microphoneOptMeOnBold: return "microphone-opt-me-on-bold"
        case .microphoneOptMeOnLight: return "microphone-opt-me-on-light"
        case .microphoneOptMeOnRegular: return "microphone-opt-me-on-regular"
        case .microphoneOptMeRegular: return "microphone-opt-me-regular"
        case .microphoneRegular: return "microphone-regular"
        case .mindMapBold: return "mind-map-bold"
        case .mindMapLight: return "mind-map-light"
        case .mindMapRegular: return "mind-map-regular"
        case .minimizeBold: return "minimize-bold"
        case .minimizeLight: return "minimize-light"
        case .minimizeRegular: return "minimize-regular"
        case .minusBold: return "minus-bold"
        case .minusLight: return "minus-light"
        case .minusRegular: return "minus-regular"
        case .mirrorBold: return "mirror-bold"
        case .mirrorFilled: return "mirror-filled"
        case .mirrorLight: return "mirror-light"
        case .mirrorRegular: return "mirror-regular"
        case .mmsFilled: return "mms-filled"
        case .moderatorBold: return "moderator-bold"
        case .moderatorLight: return "moderator-light"
        case .moderatorRegular: return "moderator-regular"
        case .monitoringBold: return "monitoring-bold"
        case .monitoringLight: return "monitoring-light"
        case .monitoringRegular: return "monitoring-regular"
        case .monthlyRecurringScheduleNodeBold: return "monthly-recurring-schedule-node-bold"
        case .monthlyRecurringScheduleNodeLight: return "monthly-recurring-schedule-node-light"
        case .monthlyRecurringScheduleNodeRegular: return "monthly-recurring-schedule-node-regular"
        case .moreAdrBold: return "more-adr-bold"
        case .moreAdrLight: return "more-adr-light"
        case .moreAdrRegular: return "more-adr-regular"
        case .moreBold: return "more-bold"
        case .moreCircleBold: return "more-circle-bold"
        case .moreCircleFilled: return "more-circle-filled"
        case .moreCircleLight: return "more-circle-light"
        case .moreCircleRegular: return "more-circle-regular"
        case .moreLight: return "more-light"
        case .moreRegular: return "more-regular"
        case .mouseCursorBold: return "mouse-cursor-bold"
        case .mouseCursorLight: return "mouse-cursor-light"
        case .mouseCursorRegular: return "mouse-cursor-regular"
        case .moveCallInAdrBold: return "move-call-in-adr-bold"
        case .moveCallInAdrLight: return "move-call-in-adr-light"
        case .moveCallInAdrRegular: return "move-call-in-adr-regular"
        case .moveCallInIphBold: return "move-call-in-iph-bold"
        case .moveCallInIphLight: return "move-call-in-iph-light"
        case .moveCallInIphRegular: return "move-call-in-iph-regular"
        case .moveCallInLaptopBold: return "move-call-in-laptop-bold"
        case .moveCallInLaptopLight: return "move-call-in-laptop-light"
        case .moveCallInLaptopRegular: return "move-call-in-laptop-regular"
        case .moveCallInOutAdrBold: return "move-call-in-out-adr-bold"
        case .moveCallInOutAdrLight: return "move-call-in-out-adr-light"
        case .moveCallInOutAdrRegular: return "move-call-in-out-adr-regular"
        case .moveCallInOutIphBold: return "move-call-in-out-iph-bold"
        case .moveCallInOutIphLight: return "move-call-in-out-iph-light"
        case .moveCallInOutIphRegular: return "move-call-in-out-iph-regular"
        case .moveCallInTabletBold: return "move-call-in-tablet-bold"
        case .moveCallInTabletLight: return "move-call-in-tablet-light"
        case .moveCallInTabletRegular: return "move-call-in-tablet-regular"
        case .moveCallOutAdrBold: return "move-call-out-adr-bold"
        case .moveCallOutAdrLight: return "move-call-out-adr-light"
        case .moveCallOutAdrRegular: return "move-call-out-adr-regular"
        case .moveCallOutIphBold: return "move-call-out-iph-bold"
        case .moveCallOutIphLight: return "move-call-out-iph-light"
        case .moveCallOutIphRegular: return "move-call-out-iph-regular"
        case .moveCallOutLaptopBold: return "move-call-out-laptop-bold"
        case .moveCallOutLaptopLight: return "move-call-out-laptop-light"
        case .moveCallOutLaptopRegular: return "move-call-out-laptop-regular"
        case .moveCallOutTabletBold: return "move-call-out-tablet-bold"
        case .moveCallOutTabletLight: return "move-call-out-tablet-light"
        case .moveCallOutTabletRegular: return "move-call-out-tablet-regular"
        case .moveToScreenBold: return "move-to-screen-bold"
        case .moveToScreenLight: return "move-to-screen-light"
        case .moveToScreenRegular: return "move-to-screen-regular"
        case .msTeamsColored: return "ms-teams-colored"
        case .multilineChartBold: return "multiline-chart-bold"
        case .multilineChartFilled: return "multiline-chart-filled"
        case .multilineChartLight: return "multiline-chart-light"
        case .multilineChartRegular: return "multiline-chart-regular"
        case .multimediaBold: return "multimedia-bold"
        case .multimediaFilled: return "multimedia-filled"
        case .multimediaLight: return "multimedia-light"
        case .multimediaRegular: return "multimedia-regular"
        case .multipledDevicesBold: return "multipled-devices-bold"
        case .multipledDevicesLight: return "multipled-devices-light"
        case .multipledDevicesRegular: return "multipled-devices-regular"
        case .musicModeCircleBold: return "music-mode-circle-bold"
        case .musicModeCircleFilled: return "music-mode-circle-filled"
        case .musicModeCircleLight: return "music-mode-circle-light"
        case .musicModeCircleRegular: return "music-mode-circle-regular"
        case .musicNoteBold: return "music-note-bold"
        case .musicNoteFilled: return "music-note-filled"
        case .musicNoteLight: return "music-note-light"
        case .musicNoteRegular: return "music-note-regular"
        case .muteOnEntryBold: return "mute-on-entry-bold"
        case .muteOnEntryFilled: return "mute-on-entry-filled"
        case .muteOnEntryLight: return "mute-on-entry-light"
        case .muteOnEntryRegular: return "mute-on-entry-regular"
        case .newManagerBold: return "new-manager-bold"
        case .newManagerLight: return "new-manager-light"
        case .newManagerRegular: return "new-manager-regular"
        case .newTitleBold: return "new-title-bold"
        case .newTitleLight: return "new-title-light"
        case .newTitleRegular: return "new-title-regular"
        case .newVoicemailBold: return "new-voicemail-bold"
        case .newVoicemailLight: return "new-voicemail-light"
        case .newVoicemailRegular: return "new-voicemail-regular"
        case .newWhiteboardBold: return "new-whiteboard-bold"
        case .newWhiteboardLight: return "new-whiteboard-light"
        case .newWhiteboardRegular: return "new-whiteboard-regular"
        case .nextBold: return "next-bold"
        case .nextLight: return "next-light"
        case .nextRegular: return "next-regular"
        case .noDevicesBold: return "no-devices-bold"
        case .noDevicesLight: return "no-devices-light"
        case .noDevicesRegular: return "no-devices-regular"
        case .noiseDetectedCanceledFilled: return "noise-detected-canceled-filled"
        case .noiseDetectedFilled: return "noise-detected-filled"
        case .noiseNoneCanceledFilled: return "noise-none-canceled-filled"
        case .noiseNoneFilled: return "noise-none-filled"
        case .noiseRemovalBold: return "noise-removal-bold"
        case .noiseRemovalLight: return "noise-removal-light"
        case .noiseRemovalRegular: return "noise-removal-regular"
        case .noteBold: return "note-bold"
        case .noteLight: return "note-light"
        case .notePptBold: return "note-ppt-bold"
        case .notePptLight: return "note-ppt-light"
        case .notePptRegular: return "note-ppt-regular"
        case .noteRegular: return "note-regular"
        case .notesBold: return "notes-bold"
        case .notesFilled: return "notes-filled"
        case .notesLight: return "notes-light"
        case .notesRegular: return "notes-regular"
        case .numberBold: return "number-bold"
        case .numberLight: return "number-light"
        case .numberRegular: return "number-regular"
        case .oldRemoteBold: return "old-remote-bold"
        case .oldRemoteLight: return "old-remote-light"
        case .oldRemoteRegular: return "old-remote-regular"
        case .oldTouchBold: return "old-touch-bold"
        case .oldTouchLight: return "old-touch-light"
        case .oldTouchRegular: return "old-touch-regular"
        case .oneColumnBold: return "one-column-bold"
        case .oneColumnLight: return "one-column-light"
        case .oneColumnRegular: return "one-column-regular"
        case .oneTimeBold: return "one-time-bold"
        case .oneTimeLight: return "one-time-light"
        case .oneTimeRegular: return "one-time-regular"
        case .openInFolderBold: return "open-in-folder-bold"
        case .openInFolderLight: return "open-in-folder-light"
        case .openInFolderRegular: return "open-in-folder-regular"
        case .openPagesBold: return "open-pages-bold"
        case .openPagesLight: return "open-pages-light"
        case .openPagesRegular: return "open-pages-regular"
        case .otherNumberBold: return "other-number-bold"
        case .otherNumberFilled: return "other-number-filled"
        case .otherNumberLight: return "other-number-light"
        case .otherNumberRegular: return "other-number-regular"
        case .otherNumberWarningBold: return "other-number-warning-bold"
        case .otherNumberWarningLight: return "other-number-warning-light"
        case .otherNumberWarningRegular: return "other-number-warning-regular"
        case .outgoingCallLegacyBold: return "outgoing-call-legacy-bold"
        case .outgoingCallLegacyFilled: return "outgoing-call-legacy-filled"
        case .outgoingCallLegacyLight: return "outgoing-call-legacy-light"
        case .outgoingCallLegacyRegular: return "outgoing-call-legacy-regular"
        case .overflowLeftBold: return "overflow-left-bold"
        case .overflowLeftLight: return "overflow-left-light"
        case .overflowLeftRegular: return "overflow-left-regular"
        case .overflowRightBold: return "overflow-right-bold"
        case .overflowRightLight: return "overflow-right-light"
        case .overflowRightRegular: return "overflow-right-regular"
        case .pairedCameraBold: return "paired-camera-bold"
        case .pairedCameraLight: return "paired-camera-light"
        case .pairedCameraRegular: return "paired-camera-regular"
        case .pairedDeviceBold: return "paired-device-bold"
        case .pairedDeviceLight: return "paired-device-light"
        case .pairedDeviceRegular: return "paired-device-regular"
        case .pairedHandsetBold: return "paired-handset-bold"
        case .pairedHandsetLight: return "paired-handset-light"
        case .pairedHandsetRegular: return "paired-handset-regular"
        case .pairingBold: return "pairing-bold"
        case .pairingLight: return "pairing-light"
        case .pairingRegular: return "pairing-regular"
        case .parkedBold: return "parked-bold"
        case .parkedFilled: return "parked-filled"
        case .parkedLight: return "parked-light"
        case .parkedRegular: return "parked-regular"
        case .parseBold: return "parse-bold"
        case .parseLight: return "parse-light"
        case .parseRegular: return "parse-regular"
        case .partialBold: return "partial-bold"
        case .partialLight: return "partial-light"
        case .partialRegular: return "partial-regular"
        case .participantAddBold: return "participant-add-bold"
        case .participantAddLight: return "participant-add-light"
        case .participantAddRegular: return "participant-add-regular"
        case .participantBlockedBold: return "participant-blocked-bold"
        case .participantBlockedLight: return "participant-blocked-light"
        case .participantBlockedRegular: return "participant-blocked-regular"
        case .participantBold: return "participant-bold"
        case .participantFilled: return "participant-filled"
        case .participantLight: return "participant-light"
        case .participantListBold: return "participant-list-bold"
        case .participantListFilled: return "participant-list-filled"
        case .participantListLight: return "participant-list-light"
        case .participantListRegular: return "participant-list-regular"
        case .participantRegular: return "participant-regular"
        case .participantRemoveBold: return "participant-remove-bold"
        case .participantRemoveLight: return "participant-remove-light"
        case .participantRemoveRegular: return "participant-remove-regular"
        case .participantUnknownBold: return "participant-unknown-bold"
        case .participantUnknownLight: return "participant-unknown-light"
        case .participantUnknownRegular: return "participant-unknown-regular"
        case .passMouseBold: return "pass-mouse-bold"
        case .passMouseLight: return "pass-mouse-light"
        case .passMouseRegular: return "pass-mouse-regular"
        case .pauseBadgeFilled: return "pause-badge-filled"
        case .pauseBold: return "pause-bold"
        case .pauseFilled: return "pause-filled"
        case .pauseLight: return "pause-light"
        case .pauseRegular: return "pause-regular"
        case .penBold: return "pen-bold"
        case .penFilled: return "pen-filled"
        case .penLight: return "pen-light"
        case .penRegular: return "pen-regular"
        case .peopleAddBold: return "people-add-bold"
        case .peopleAddFilled: return "people-add-filled"
        case .peopleAddLight: return "people-add-light"
        case .peopleAddRegular: return "people-add-regular"
        case .peopleBold: return "people-bold"
        case .peopleCircleBold: return "people-circle-bold"
        case .peopleCircleFilled: return "people-circle-filled"
        case .peopleCircleLight: return "people-circle-light"
        case .peopleCircleRegular: return "people-circle-regular"
        case .peopleFilled: return "people-filled"
        case .peopleInsightsBold: return "people-insights-bold"
        case .peopleInsightsFilled: return "people-insights-filled"
        case .peopleInsightsLight: return "people-insights-light"
        case .peopleInsightsRegular: return "people-insights-regular"
        case .peopleLight: return "people-light"
        case .peopleRegular: return "people-regular"
        case .phoneAlertBold: return "phone-alert-bold"
        case .phoneAlertLight: return "phone-alert-light"
        case .phoneAlertRegular: return "phone-alert-regular"
        case .phoneBadgeFilled: return "phone-badge-filled"
        case .phoneBold: return "phone-bold"
        case .phoneFilled: return "phone-filled"
        case .phoneLight: return "phone-light"
        case .phoneMutedBold: return "phone-muted-bold"
        case .phoneMutedLight: return "phone-muted-light"
        case .phoneMutedRegular: return "phone-muted-regular"
        case .phonePrivateBold: return "phone-private-bold"
        case .phonePrivateLight: return "phone-private-light"
        case .phonePrivateRegular: return "phone-private-regular"
        case .phoneRegular: return "phone-regular"
        case .phoneReplyAllBold: return "phone-reply-all-bold"
        case .phoneReplyAllLight: return "phone-reply-all-light"
        case .phoneReplyAllRegular: return "phone-reply-all-regular"
        case .phoneReplyBold: return "phone-reply-bold"
        case .phoneReplyLight: return "phone-reply-light"
        case .phoneReplyRegular: return "phone-reply-regular"
        case .pickerBold: return "picker-bold"
        case .pickerLight: return "picker-light"
        case .pickerRegular: return "picker-regular"
        case .pieChartBold: return "pie-chart-bold"
        case .pieChartFilled: return "pie-chart-filled"
        case .pieChartLight: return "pie-chart-light"
        case .pieChartRegular: return "pie-chart-regular"
        case .pinBold: return "pin-bold"
        case .pinFilled: return "pin-filled"
        case .pinLight: return "pin-light"
        case .pinListActivityBold: return "pin-list-activity-bold"
        case .pinListActivityLight: return "pin-list-activity-light"
        case .pinListActivityRegular: return "pin-list-activity-regular"
        case .pinListBold: return "pin-list-bold"
        case .pinListLight: return "pin-list-light"
        case .pinListRegular: return "pin-list-regular"
        case .pinMutedBold: return "pin-muted-bold"
        case .pinMutedFilled: return "pin-muted-filled"
        case .pinMutedLight: return "pin-muted-light"
        case .pinMutedRegular: return "pin-muted-regular"
        case .pinRegular: return "pin-regular"
        case .pipBold: return "pip-bold"
        case .pipEnterBold: return "pip-enter-bold"
        case .pipEnterLight: return "pip-enter-light"
        case .pipEnterRegular: return "pip-enter-regular"
        case .pipExitBold: return "pip-exit-bold"
        case .pipExitLight: return "pip-exit-light"
        case .pipExitRegular: return "pip-exit-regular"
        case .pipFilled: return "pip-filled"
        case .pipLight: return "pip-light"
        case .pipRegular: return "pip-regular"
        case .placeholderBold: return "placeholder-bold"
        case .placeholderFilled: return "placeholder-filled"
        case .placeholderLight: return "placeholder-light"
        case .placeholderRegular: return "placeholder-regular"
        case .playBold: return "play-bold"
        case .playCircleBold: return "play-circle-bold"
        case .playCircleFilled: return "play-circle-filled"
        case .playCircleLight: return "play-circle-light"
        case .playCircleRegular: return "play-circle-regular"
        case .playFilled: return "play-filled"
        case .playLight: return "play-light"
        case .playRegular: return "play-regular"
        case .plugAcBold: return "plug-ac-bold"
        case .plugAcLight: return "plug-ac-light"
        case .plugAcRegular: return "plug-ac-regular"
        case .plusBold: return "plus-bold"
        case .plusCircleBold: return "plus-circle-bold"
        case .plusCircleFilled: return "plus-circle-filled"
        case .plusCircleLight: return "plus-circle-light"
        case .plusCircleRegular: return "plus-circle-regular"
        case .plusLight: return "plus-light"
        case .plusRegular: return "plus-regular"
        case .pmrBold: return "pmr-bold"
        case .pmrFilled: return "pmr-filled"
        case .pmrLight: return "pmr-light"
        case .pmrRegular: return "pmr-regular"
        case .pollBold: return "poll-bold"
        case .pollFilled: return "poll-filled"
        case .pollLight: return "poll-light"
        case .pollRegular: return "poll-regular"
        case .popInBold: return "pop-in-bold"
        case .popInLight: return "pop-in-light"
        case .popInRegular: return "pop-in-regular"
        case .popOutBold: return "pop-out-bold"
        case .popOutLight: return "pop-out-light"
        case .popOutRegular: return "pop-out-regular"
        case .popUpBold: return "pop-up-bold"
        case .popUpLight: return "pop-up-light"
        case .popUpRegular: return "pop-up-regular"
        case .portraitLandscapeBold: return "portrait-landscape-bold"
        case .portraitLandscapeLight: return "portrait-landscape-light"
        case .portraitLandscapeRegular: return "portrait-landscape-regular"
        case .powerAcBold: return "power-ac-bold"
        case .powerAcLight: return "power-ac-light"
        case .powerAcRegular: return "power-ac-regular"
        case .powerBold: return "power-bold"
        case .powerLight: return "power-light"
        case .powerRegular: return "power-regular"
        case .preHeaderBold: return "pre-header-bold"
        case .preHeaderLight: return "pre-header-light"
        case .preHeaderRegular: return "pre-header-regular"
        case .premiumBold: return "premium-bold"
        case .premiumLight: return "premium-light"
        case .premiumRegular: return "premium-regular"
        case .presentationBold: return "presentation-bold"
        case .presentationLight: return "presentation-light"
        case .presentationRegular: return "presentation-regular"
        case .preventDownloadBold: return "prevent-download-bold"
        case .preventDownloadFilled: return "prevent-download-filled"
        case .preventDownloadLight: return "prevent-download-light"
        case .preventDownloadRegular: return "prevent-download-regular"
        case .primaryParticipantBold: return "primary-participant-bold"
        case .primaryParticipantLight: return "primary-participant-light"
        case .primaryParticipantRegular: return "primary-participant-regular"
        case .printBold: return "print-bold"
        case .printLight: return "print-light"
        case .printRegular: return "print-regular"
        case .priorityBadgeFilled: return "priority-badge-filled"
        case .priorityCircleBold: return "priority-circle-bold"
        case .priorityCircleFilled: return "priority-circle-filled"
        case .priorityCircleLight: return "priority-circle-light"
        case .priorityCircleRegular: return "priority-circle-regular"
        case .priorityCircleTwoBold: return "priority-circle-two-bold"
        case .priorityCircleTwoFilled: return "priority-circle-two-filled"
        case .priorityCircleTwoLight: return "priority-circle-two-light"
        case .priorityCircleTwoRegular: return "priority-circle-two-regular"
        case .privacyCircleBold: return "privacy-circle-bold"
        case .privacyCircleFilled: return "privacy-circle-filled"
        case .privacyCircleLight: return "privacy-circle-light"
        case .privacyCircleRegular: return "privacy-circle-regular"
        case .privateBold: return "private-bold"
        case .privateCircleBold: return "private-circle-bold"
        case .privateCircleFilled: return "private-circle-filled"
        case .privateCircleLight: return "private-circle-light"
        case .privateCircleRegular: return "private-circle-regular"
        case .privateLight: return "private-light"
        case .privateMeetingBold: return "private-meeting-bold"
        case .privateMeetingLight: return "private-meeting-light"
        case .privateMeetingRegular: return "private-meeting-regular"
        case .privateRegular: return "private-regular"
        case .productDemoBold: return "product-demo-bold"
        case .productDemoLight: return "product-demo-light"
        case .productDemoRegular: return "product-demo-regular"
        case .proximityBold: return "proximity-bold"
        case .proximityLight: return "proximity-light"
        case .proximityMutedBold: return "proximity-muted-bold"
        case .proximityMutedLight: return "proximity-muted-light"
        case .proximityMutedRegular: return "proximity-muted-regular"
        case .proximityRegular: return "proximity-regular"
        case .proximityVideoBold: return "proximity-video-bold"
        case .proximityVideoLight: return "proximity-video-light"
        case .proximityVideoRegular: return "proximity-video-regular"
        case .ptoPresenceBold: return "pto-presence-bold"
        case .ptoPresenceFilled: return "pto-presence-filled"
        case .ptoPresenceLight: return "pto-presence-light"
        case .ptoPresenceRegular: return "pto-presence-regular"
        case .pullCallBold: return "pull-call-bold"
        case .pullCallFilled: return "pull-call-filled"
        case .pullCallLight: return "pull-call-light"
        case .pullCallRegular: return "pull-call-regular"
        case .qABold: return "q-a-bold"
        case .qALight: return "q-a-light"
        case .qARegular: return "q-a-regular"
        case .qrCodeBold: return "qr-code-bold"
        case .qrCodeLight: return "qr-code-light"
        case .qrCodeRegular: return "qr-code-regular"
        case .qrCodeScanBold: return "qr-code-scan-bold"
        case .qrCodeScanLight: return "qr-code-scan-light"
        case .qrCodeScanRegular: return "qr-code-scan-regular"
        case .qualityBold: return "quality-bold"
        case .qualityLight: return "quality-light"
        case .qualityRegular: return "quality-regular"
        case .queueContactBold: return "queue-contact-bold"
        case .queueContactFilled: return "queue-contact-filled"
        case .queueContactLight: return "queue-contact-light"
        case .queueContactRegular: return "queue-contact-regular"
        case .quietBold: return "quiet-bold"
        case .quietHoursPresenceBold: return "quiet-hours-presence-bold"
        case .quietHoursPresenceFilled: return "quiet-hours-presence-filled"
        case .quietHoursPresenceLight: return "quiet-hours-presence-light"
        case .quietHoursPresenceRegular: return "quiet-hours-presence-regular"
        case .quietLight: return "quiet-light"
        case .quietRegular: return "quiet-regular"
        case .radioButtonGroupBold: return "radio-button-group-bold"
        case .radioButtonGroupLight: return "radio-button-group-light"
        case .radioButtonGroupRegular: return "radio-button-group-regular"
        case .raiseHandBold: return "raise-hand-bold"
        case .raiseHandCircleFilled: return "raise-hand-circle-filled"
        case .raiseHandFilled: return "raise-hand-filled"
        case .raiseHandLight: return "raise-hand-light"
        case .raiseHandRegular: return "raise-hand-regular"
        case .ramBold: return "ram-bold"
        case .ramLight: return "ram-light"
        case .ramRegular: return "ram-regular"
        case .reactionsBold: return "reactions-bold"
        case .reactionsFilled: return "reactions-filled"
        case .reactionsLight: return "reactions-light"
        case .reactionsRegular: return "reactions-regular"
        case .reactivateBold: return "reactivate-bold"
        case .reactivateLight: return "reactivate-light"
        case .reactivateRegular: return "reactivate-regular"
        case .receiveVoiceBold: return "receive-voice-bold"
        case .receiveVoiceFilled: return "receive-voice-filled"
        case .receiveVoiceLight: return "receive-voice-light"
        case .receiveVoiceRegular: return "receive-voice-regular"
        case .recentsBold: return "recents-bold"
        case .recentsFilled: return "recents-filled"
        case .recentsLight: return "recents-light"
        case .recentsPresenceBadgeFilled: return "recents-presence-badge-filled"
        case .recentsPresenceBold: return "recents-presence-bold"
        case .recentsPresenceFilled: return "recents-presence-filled"
        case .recentsPresenceLight: return "recents-presence-light"
        case .recentsPresenceRegular: return "recents-presence-regular"
        case .recentsRegular: return "recents-regular"
        case .recordActiveBold: return "record-active-bold"
        case .recordActiveFilled: return "record-active-filled"
        case .recordActiveLight: return "record-active-light"
        case .recordActiveRegular: return "record-active-regular"
        case .recordBold: return "record-bold"
        case .recordFilled: return "record-filled"
        case .recordLight: return "record-light"
        case .recordPausedBold: return "record-paused-bold"
        case .recordPausedFilled: return "record-paused-filled"
        case .recordPausedLight: return "record-paused-light"
        case .recordPausedRegular: return "record-paused-regular"
        case .recordRegular: return "record-regular"
        case .recurringBold: return "recurring-bold"
        case .recurringLight: return "recurring-light"
        case .recurringOffBold: return "recurring-off-bold"
        case .recurringOffLight: return "recurring-off-light"
        case .recurringOffRegular: return "recurring-off-regular"
        case .recurringRegular: return "recurring-regular"
        case .redialBold: return "redial-bold"
        case .redialLight: return "redial-light"
        case .redialRegular: return "redial-regular"
        case .redoBold: return "redo-bold"
        case .redoLight: return "redo-light"
        case .redoRegular: return "redo-regular"
        case .refreshBold: return "refresh-bold"
        case .refreshLight: return "refresh-light"
        case .refreshRegular: return "refresh-regular"
        case .remoteDesktopControlBold: return "remote-desktop-control-bold"
        case .remoteDesktopControlFilled: return "remote-desktop-control-filled"
        case .remoteDesktopControlLight: return "remote-desktop-control-light"
        case .remoteDesktopControlRegular: return "remote-desktop-control-regular"
        case .removeBold: return "remove-bold"
        case .removeFilled: return "remove-filled"
        case .removeLight: return "remove-light"
        case .removeRegular: return "remove-regular"
        case .replyBold: return "reply-bold"
        case .replyFilled: return "reply-filled"
        case .replyLight: return "reply-light"
        case .replyListBold: return "reply-list-bold"
        case .replyListLight: return "reply-list-light"
        case .replyListRegular: return "reply-list-regular"
        case .replyPrivatelyBold: return "reply-privately-bold"
        case .replyPrivatelyLight: return "reply-privately-light"
        case .replyPrivatelyRegular: return "reply-privately-regular"
        case .replyRegular: return "reply-regular"
        case .resetBold: return "reset-bold"
        case .resetLight: return "reset-light"
        case .resetRegular: return "reset-regular"
        case .resizeCornerBold: return "resize-corner-bold"
        case .resizeCornerLight: return "resize-corner-light"
        case .resizeCornerRegular: return "resize-corner-regular"
        case .responsiveMobileBold: return "responsive-mobile-bold"
        case .responsiveMobileLight: return "responsive-mobile-light"
        case .responsiveMobileRegular: return "responsive-mobile-regular"
        case .restartBold: return "restart-bold"
        case .restartLight: return "restart-light"
        case .restartRegular: return "restart-regular"
        case .retrieveCallBold: return "retrieve-call-bold"
        case .retrieveCallFilled: return "retrieve-call-filled"
        case .retrieveCallLight: return "retrieve-call-light"
        case .retrieveCallRegular: return "retrieve-call-regular"
        case .returnBold: return "return-bold"
        case .returnLight: return "return-light"
        case .returnRegular: return "return-regular"
        case .rewindTenSecBold: return "rewind-ten-sec-bold"
        case .rewindTenSecLight: return "rewind-ten-sec-light"
        case .rewindTenSecRegular: return "rewind-ten-sec-regular"
        case .ringtoneBold: return "ringtone-bold"
        case .ringtoneLight: return "ringtone-light"
        case .ringtoneRegular: return "ringtone-regular"
        case .roomCalendarBold: return "room-calendar-bold"
        case .roomCalendarLight: return "room-calendar-light"
        case .roomCalendarRegular: return "room-calendar-regular"
        case .roomLightsBold: return "room-lights-bold"
        case .roomLightsFilled: return "room-lights-filled"
        case .roomLightsLight: return "room-lights-light"
        case .roomLightsRegular: return "room-lights-regular"
        case .rotateContentBold: return "rotate-content-bold"
        case .rotateContentFilled: return "rotate-content-filled"
        case .rotateContentLight: return "rotate-content-light"
        case .rotateContentRegular: return "rotate-content-regular"
        case .rssBold: return "rss-bold"
        case .rssFilled: return "rss-filled"
        case .rssLight: return "rss-light"
        case .rssRegular: return "rss-regular"
        case .ruleBasedBold: return "rule-based-bold"
        case .ruleBasedLight: return "rule-based-light"
        case .ruleBasedRegular: return "rule-based-regular"
        case .runningApplicationBold: return "running-application-bold"
        case .runningApplicationFilled: return "running-application-filled"
        case .runningApplicationLight: return "running-application-light"
        case .runningApplicationRegular: return "running-application-regular"
        case .saveBold: return "save-bold"
        case .saveLight: return "save-light"
        case .saveRegular: return "save-regular"
        case .saveTranscriptBold: return "save-transcript-bold"
        case .saveTranscriptFilled: return "save-transcript-filled"
        case .saveTranscriptLight: return "save-transcript-light"
        case .saveTranscriptRegular: return "save-transcript-regular"
        case .scanBold: return "scan-bold"
        case .scanLight: return "scan-light"
        case .scanRegular: return "scan-regular"
        case .scheduleSendBold: return "schedule-send-bold"
        case .scheduleSendFilled: return "schedule-send-filled"
        case .scheduleSendLight: return "schedule-send-light"
        case .scheduleSendRegular: return "schedule-send-regular"
        case .scheduleWinnerBold: return "schedule-winner-bold"
        case .scheduleWinnerFilled: return "schedule-winner-filled"
        case .scheduleWinnerLight: return "schedule-winner-light"
        case .scheduleWinnerRegular: return "schedule-winner-regular"
        case .schedulerAvailableBold: return "scheduler-available-bold"
        case .schedulerAvailableLight: return "scheduler-available-light"
        case .schedulerAvailableRegular: return "scheduler-available-regular"
        case .schedulerNotWorkingHoursBold: return "scheduler-not-working-hours-bold"
        case .schedulerNotWorkingHoursLight: return "scheduler-not-working-hours-light"
        case .schedulerNotWorkingHoursRegular: return "scheduler-not-working-hours-regular"
        case .schedulerUnavailableBold: return "scheduler-unavailable-bold"
        case .schedulerUnavailableLight: return "scheduler-unavailable-light"
        case .schedulerUnavailableRegular: return "scheduler-unavailable-regular"
        case .schedulerUnknownBold: return "scheduler-unknown-bold"
        case .schedulerUnknownLight: return "scheduler-unknown-light"
        case .schedulerUnknownRegular: return "scheduler-unknown-regular"
        case .screenshotBold: return "screenshot-bold"
        case .screenshotDocBold: return "screenshot-doc-bold"
        case .screenshotDocFilled: return "screenshot-doc-filled"
        case .screenshotDocLight: return "screenshot-doc-light"
        case .screenshotDocRegular: return "screenshot-doc-regular"
        case .screenshotLight: return "screenshot-light"
        case .screenshotRegular: return "screenshot-regular"
        case .searchBold: return "search-bold"
        case .searchFilled: return "search-filled"
        case .searchLight: return "search-light"
        case .searchRegular: return "search-regular"
        case .secondaryArrowBold: return "secondary-arrow-bold"
        case .secondaryArrowLight: return "secondary-arrow-light"
        case .secondaryArrowRegular: return "secondary-arrow-regular"
        case .secureCallLockBold: return "secure-call-lock-bold"
        case .secureCallLockFilled: return "secure-call-lock-filled"
        case .secureCallLockLight: return "secure-call-lock-light"
        case .secureCallLockRegular: return "secure-call-lock-regular"
        case .secureCallShieldBold: return "secure-call-shield-bold"
        case .secureCallShieldFilled: return "secure-call-shield-filled"
        case .secureCallShieldLight: return "secure-call-shield-light"
        case .secureCallShieldRegular: return "secure-call-shield-regular"
        case .secureCircleBold: return "secure-circle-bold"
        case .secureCircleFilled: return "secure-circle-filled"
        case .secureCircleLight: return "secure-circle-light"
        case .secureCircleRegular: return "secure-circle-regular"
        case .secureLockBold: return "secure-lock-bold"
        case .secureLockFilled: return "secure-lock-filled"
        case .secureLockLight: return "secure-lock-light"
        case .secureLockRegular: return "secure-lock-regular"
        case .segmentExcludeFilled: return "segment-exclude-filled"
        case .segmentFilterFilled: return "segment-filter-filled"
        case .segmentIncludeFilled: return "segment-include-filled"
        case .selectAllBold: return "select-all-bold"
        case .selectAllFilled: return "select-all-filled"
        case .selectAllLight: return "select-all-light"
        case .selectAllRegular: return "select-all-regular"
        case .selectionBold: return "selection-bold"
        case .selectionLight: return "selection-light"
        case .selectionRegular: return "selection-regular"
        case .sendBold: return "send-bold"
        case .sendFilled: return "send-filled"
        case .sendLight: return "send-light"
        case .sendRegular: return "send-regular"
        case .sendVoiceBold: return "send-voice-bold"
        case .sendVoiceFilled: return "send-voice-filled"
        case .sendVoiceLight: return "send-voice-light"
        case .sendVoiceRegular: return "send-voice-regular"
        case .serverBold: return "server-bold"
        case .serverErrorBold: return "server-error-bold"
        case .serverErrorLight: return "server-error-light"
        case .serverErrorRegular: return "server-error-regular"
        case .serverLight: return "server-light"
        case .serverRegular: return "server-regular"
        case .servicesBold: return "services-bold"
        case .servicesLight: return "services-light"
        case .servicesRegular: return "services-regular"
        case .setVariableBold: return "set-variable-bold"
        case .setVariableLight: return "set-variable-light"
        case .setVariableRegular: return "set-variable-regular"
        case .settingsBold: return "settings-bold"
        case .settingsFilled: return "settings-filled"
        case .settingsLight: return "settings-light"
        case .settingsRegular: return "settings-regular"
        case .setupAssistantBold: return "setup-assistant-bold"
        case .setupAssistantLight: return "setup-assistant-light"
        case .setupAssistantRegular: return "setup-assistant-regular"
        case .sftpBold: return "sftp-bold"
        case .sftpLight: return "sftp-light"
        case .sftpRegular: return "sftp-regular"
        case .shapeCircleBold: return "shape-circle-bold"
        case .shapeCircleFilled: return "shape-circle-filled"
        case .shapeCircleLight: return "shape-circle-light"
        case .shapeCircleMdFilled: return "shape-circle-md-filled"
        case .shapeCircleRegular: return "shape-circle-regular"
        case .shapeCircleSmFilled: return "shape-circle-sm-filled"
        case .shapeDiagonalLineBold: return "shape-diagonal-line-bold"
        case .shapeDiagonalLineLight: return "shape-diagonal-line-light"
        case .shapeDiagonalLineRegular: return "shape-diagonal-line-regular"
        case .shapeDiamondBold: return "shape-diamond-bold"
        case .shapeDiamondFilled: return "shape-diamond-filled"
        case .shapeDiamondLight: return "shape-diamond-light"
        case .shapeDiamondRegular: return "shape-diamond-regular"
        case .shapeOvalBold: return "shape-oval-bold"
        case .shapeOvalLight: return "shape-oval-light"
        case .shapeOvalRegular: return "shape-oval-regular"
        case .shapeSquareBold: return "shape-square-bold"
        case .shapeSquareFilled: return "shape-square-filled"
        case .shapeSquareLight: return "shape-square-light"
        case .shapeSquareRegular: return "shape-square-regular"
        case .shapeTriangleBold: return "shape-triangle-bold"
        case .shapeTriangleFilled: return "shape-triangle-filled"
        case .shapeTriangleLight: return "shape-triangle-light"
        case .shapeTriangleRegular: return "shape-triangle-regular"
        case .shapesBold: return "shapes-bold"
        case .shapesLight: return "shapes-light"
        case .shapesRegular: return "shapes-regular"
        case .shareCNativeAdrBold: return "share-c-native-adr-bold"
        case .shareCNativeAdrFilled: return "share-c-native-adr-filled"
        case .shareCNativeAdrLight: return "share-c-native-adr-light"
        case .shareCNativeAdrRegular: return "share-c-native-adr-regular"
        case .shareCNativeIphBold: return "share-c-native-iph-bold"
        case .shareCNativeIphLight: return "share-c-native-iph-light"
        case .shareCNativeIphRegular: return "share-c-native-iph-regular"
        case .shareContentOnDeviceBold: return "share-content-on-device-bold"
        case .shareContentOnDeviceLight: return "share-content-on-device-light"
        case .shareContentOnDeviceRegular: return "share-content-on-device-regular"
        case .shareScreenAddBold: return "share-screen-add-bold"
        case .shareScreenAddLight: return "share-screen-add-light"
        case .shareScreenAddRegular: return "share-screen-add-regular"
        case .shareScreenBadgeFilled: return "share-screen-badge-filled"
        case .shareScreenBold: return "share-screen-bold"
        case .shareScreenFilled: return "share-screen-filled"
        case .shareScreenLight: return "share-screen-light"
        case .shareScreenRegular: return "share-screen-regular"
        case .shareSpaceBold: return "share-space-bold"
        case .shareSpaceLight: return "share-space-light"
        case .shareSpaceRegular: return "share-space-regular"
        case .shieldBold: return "shield-bold"
        case .shieldLight: return "shield-light"
        case .shieldRegular: return "shield-regular"
        case .shoppingCartBold: return "shopping-cart-bold"
        case .shoppingCartFilled: return "shopping-cart-filled"
        case .shoppingCartLight: return "shopping-cart-light"
        case .shoppingCartRegular: return "shopping-cart-regular"
        case .shortTextBoxBold: return "short-text-box-bold"
        case .shortTextBoxLight: return "short-text-box-light"
        case .shortTextBoxRegular: return "short-text-box-regular"
        case .showBold: return "show-bold"
        case .showFilled: return "show-filled"
        case .showLight: return "show-light"
        case .showRegular: return "show-regular"
        case .signInBold: return "sign-in-bold"
        case .signInFilled: return "sign-in-filled"
        case .signInForcedBold: return "sign-in-forced-bold"
        case .signInForcedLight: return "sign-in-forced-light"
        case .signInForcedRegular: return "sign-in-forced-regular"
        case .signInLight: return "sign-in-light"
        case .signInRegular: return "sign-in-regular"
        case .signLangIntBold: return "sign-lang-int-bold"
        case .signLangIntLight: return "sign-lang-int-light"
        case .signLangIntRegular: return "sign-lang-int-regular"
        case .signOutBold: return "sign-out-bold"
        case .signOutLight: return "sign-out-light"
        case .signOutRegular: return "sign-out-regular"
        case .signalFourBold: return "signal-four-bold"
        case .signalFourLight: return "signal-four-light"
        case .signalFourRegular: return "signal-four-regular"
        case .signalOneBold: return "signal-one-bold"
        case .signalOneLight: return "signal-one-light"
        case .signalOneRegular: return "signal-one-regular"
        case .signalThreeBold: return "signal-three-bold"
        case .signalThreeLight: return "signal-three-light"
        case .signalThreeRegular: return "signal-three-regular"
        case .signalTwoBold: return "signal-two-bold"
        case .signalTwoLight: return "signal-two-light"
        case .signalTwoRegular: return "signal-two-regular"
        case .signalZeroBold: return "signal-zero-bold"
        case .signalZeroLight: return "signal-zero-light"
        case .signalZeroRegular: return "signal-zero-regular"
        case .simplePromotionBold: return "simple-promotion-bold"
        case .simplePromotionLight: return "simple-promotion-light"
        case .simplePromotionRegular: return "simple-promotion-regular"
        case .singleNumberReachBold: return "single-number-reach-bold"
        case .singleNumberReachLight: return "single-number-reach-light"
        case .singleNumberReachRegular: return "single-number-reach-regular"
        case .sipRegistrationInProgressBold: return "sip-registration-in-progress-bold"
        case .sipRegistrationInProgressFilled: return "sip-registration-in-progress-filled"
        case .sipRegistrationInProgressLight: return "sip-registration-in-progress-light"
        case .sipRegistrationInProgressRegular: return "sip-registration-in-progress-regular"
        case .skipBold: return "skip-bold"
        case .skipBwBold: return "skip-bw-bold"
        case .skipBwFilled: return "skip-bw-filled"
        case .skipBwLight: return "skip-bw-light"
        case .skipBwRegular: return "skip-bw-regular"
        case .skipFwBold: return "skip-fw-bold"
        case .skipFwFilled: return "skip-fw-filled"
        case .skipFwLight: return "skip-fw-light"
        case .skipFwRegular: return "skip-fw-regular"
        case .skipLight: return "skip-light"
        case .skipRegular: return "skip-regular"
        case .slidoColored: return "slido-colored"
        case .smsFilled: return "sms-filled"
        case .smsInboundBold: return "sms-inbound-bold"
        case .smsInboundLight: return "sms-inbound-light"
        case .smsInboundRegular: return "sms-inbound-regular"
        case .smsMessageBold: return "sms-message-bold"
        case .smsMessageFilled: return "sms-message-filled"
        case .smsMessageLight: return "sms-message-light"
        case .smsMessageRegular: return "sms-message-regular"
        case .smsOutgoingFilled: return "sms-outgoing-filled"
        case .smsUnreadBold: return "sms-unread-bold"
        case .smsUnreadLight: return "sms-unread-light"
        case .smsUnreadRegular: return "sms-unread-regular"
        case .socialAlexaColored: return "social-alexa-colored"
        case .socialAlexa: return "social-alexa"
        case .socialFacebookColored: return "social-facebook-colored"
        case .socialFacebook: return "social-facebook"
        case .socialFbmessengerColored: return "social-fbmessenger-colored"
        case .socialFbmessenger: return "social-fbmessenger"
        case .socialInstagram: return "social-instagram"
        case .socialLineColored: return "social-line-colored"
        case .socialLine: return "social-line"
        case .socialMicrosoftColored: return "social-microsoft-colored"
        case .socialMicrosoft: return "social-microsoft"
        case .socialMmsColoredGold: return "social-mms-colored-gold"
        case .socialMms: return "social-mms"
        case .socialRcsColored: return "social-rcs-colored"
        case .socialRcs: return "social-rcs"
        case .socialSmsColoredMint: return "social-sms-colored-mint"
        case .socialSmsOutgoing: return "social-sms-outgoing"
        case .socialSms: return "social-sms"
        case .socialTelegramColored: return "social-telegram-colored"
        case .socialTelegram: return "social-telegram"
        case .socialViberColored: return "social-viber-colored"
        case .socialViber: return "social-viber"
        case .socialWechatColored: return "social-wechat-colored"
        case .socialWechat: return "social-wechat"
        case .socialWhatsappColored: return "social-whatsapp-colored"
        case .socialWhatsapp: return "social-whatsapp"
        case .socialX: return "social-x"
        case .sortAscendingBold: return "sort-ascending-bold"
        case .sortAscendingLight: return "sort-ascending-light"
        case .sortAscendingRegular: return "sort-ascending-regular"
        case .sortDescendingBold: return "sort-descending-bold"
        case .sortDescendingLight: return "sort-descending-light"
        case .sortDescendingRegular: return "sort-descending-regular"
        case .soundDefaultBold: return "sound-default-bold"
        case .soundDefaultLight: return "sound-default-light"
        case .soundDefaultRegular: return "sound-default-regular"
        case .sparkleBold: return "sparkle-bold"
        case .sparkleFilled: return "sparkle-filled"
        case .sparkleLight: return "sparkle-light"
        case .sparkleRegular: return "sparkle-regular"
        case .speakerBold: return "speaker-bold"
        case .speakerDisconnectedBold: return "speaker-disconnected-bold"
        case .speakerDisconnectedFilled: return "speaker-disconnected-filled"
        case .speakerDisconnectedLight: return "speaker-disconnected-light"
        case .speakerDisconnectedRegular: return "speaker-disconnected-regular"
        case .speakerFilled: return "speaker-filled"
        case .speakerLight: return "speaker-light"
        case .speakerMutedBold: return "speaker-muted-bold"
        case .speakerMutedFilled: return "speaker-muted-filled"
        case .speakerMutedLight: return "speaker-muted-light"
        case .speakerMutedRegular: return "speaker-muted-regular"
        case .speakerOffBold: return "speaker-off-bold"
        case .speakerOffFilled: return "speaker-off-filled"
        case .speakerOffLight: return "speaker-off-light"
        case .speakerOffRegular: return "speaker-off-regular"
        case .speakerOnBold: return "speaker-on-bold"
        case .speakerOnLight: return "speaker-on-light"
        case .speakerOnRegular: return "speaker-on-regular"
        case .speakerRegular: return "speaker-regular"
        case .speakerTurnDownBold: return "speaker-turn-down-bold"
        case .speakerTurnDownFilled: return "speaker-turn-down-filled"
        case .speakerTurnDownLight: return "speaker-turn-down-light"
        case .speakerTurnDownRegular: return "speaker-turn-down-regular"
        case .speakerTurnUpBold: return "speaker-turn-up-bold"
        case .speakerTurnUpFilled: return "speaker-turn-up-filled"
        case .speakerTurnUpLight: return "speaker-turn-up-light"
        case .speakerTurnUpRegular: return "speaker-turn-up-regular"
        case .speedDialBold: return "speed-dial-bold"
        case .speedDialFilled: return "speed-dial-filled"
        case .speedDialLight: return "speed-dial-light"
        case .speedDialRegular: return "speed-dial-regular"
        case .spellCheckerBold: return "spell-checker-bold"
        case .spellCheckerLight: return "spell-checker-light"
        case .spellCheckerRegular: return "spell-checker-regular"
        case .spinnerBold: return "spinner-bold"
        case .spinnerInProgressBold: return "spinner-in-progress-bold"
        case .spinnerInProgressLight: return "spinner-in-progress-light"
        case .spinnerInProgressRegular: return "spinner-in-progress-regular"
        case .spinnerLight: return "spinner-light"
        case .spinnerRegular: return "spinner-regular"
        case .splitViewBold: return "split-view-bold"
        case .splitViewLight: return "split-view-light"
        case .splitViewRegular: return "split-view-regular"
        case .stackedAreaChartBold: return "stacked-area-chart-bold"
        case .stackedAreaChartFilled: return "stacked-area-chart-filled"
        case .stackedAreaChartFullBold: return "stacked-area-chart-full-bold"
        case .stackedAreaChartFullFilled: return "stacked-area-chart-full-filled"
        case .stackedAreaChartFullLight: return "stacked-area-chart-full-light"
        case .stackedAreaChartFullRegular: return "stacked-area-chart-full-regular"
        case .stackedAreaChartLight: return "stacked-area-chart-light"
        case .stackedAreaChartRegular: return "stacked-area-chart-regular"
        case .stackedBarChartBold: return "stacked-bar-chart-bold"
        case .stackedBarChartFilled: return "stacked-bar-chart-filled"
        case .stackedBarChartFullBold: return "stacked-bar-chart-full-bold"
        case .stackedBarChartFullFilled: return "stacked-bar-chart-full-filled"
        case .stackedBarChartFullLight: return "stacked-bar-chart-full-light"
        case .stackedBarChartFullRegular: return "stacked-bar-chart-full-regular"
        case .stackedBarChartLight: return "stacked-bar-chart-light"
        case .stackedBarChartRegular: return "stacked-bar-chart-regular"
        case .startChatBold: return "start-chat-bold"
        case .startChatLight: return "start-chat-light"
        case .startChatRegular: return "start-chat-regular"
        case .stethoscopeBold: return "stethoscope-bold"
        case .stethoscopeLight: return "stethoscope-light"
        case .stethoscopeRegular: return "stethoscope-regular"
        case .stickersBold: return "stickers-bold"
        case .stickersLight: return "stickers-light"
        case .stickersRegular: return "stickers-regular"
        case .stickiesBold: return "stickies-bold"
        case .stickiesLight: return "stickies-light"
        case .stickiesRegular: return "stickies-regular"
        case .stopBold: return "stop-bold"
        case .stopCircleBold: return "stop-circle-bold"
        case .stopCircleFilled: return "stop-circle-filled"
        case .stopCircleLight: return "stop-circle-light"
        case .stopCircleRegular: return "stop-circle-regular"
        case .stopContentShareBold: return "stop-content-share-bold"
        case .stopContentShareLight: return "stop-content-share-light"
        case .stopContentShareRegular: return "stop-content-share-regular"
        case .stopFilled: return "stop-filled"
        case .stopLight: return "stop-light"
        case .stopRegular: return "stop-regular"
        case .storedInfoBold: return "stored-info-bold"
        case .storedInfoFilled: return "stored-info-filled"
        case .storedInfoLight: return "stored-info-light"
        case .storedInfoRegular: return "stored-info-regular"
        case .streamingBold: return "streaming-bold"
        case .streamingLight: return "streaming-light"
        case .streamingRegular: return "streaming-regular"
        case .strikethroughBold: return "strikethrough-bold"
        case .strikethroughFilled: return "strikethrough-filled"
        case .strikethroughLight: return "strikethrough-light"
        case .strikethroughRegular: return "strikethrough-regular"
        case .studioModeBold: return "studio-mode-bold"
        case .studioModeLight: return "studio-mode-light"
        case .studioModeRegular: return "studio-mode-regular"
        case .subscriptBold: return "subscript-bold"
        case .subscriptLight: return "subscript-light"
        case .subscriptRegular: return "subscript-regular"
        case .superscriptBold: return "superscript-bold"
        case .superscriptLight: return "superscript-light"
        case .superscriptRegular: return "superscript-regular"
        case .surveyBold: return "survey-bold"
        case .surveyFilled: return "survey-filled"
        case .surveyLight: return "survey-light"
        case .surveyRegular: return "survey-regular"
        case .swiftmatchColored: return "swiftmatch-colored"
        case .swiftmatch: return "swiftmatch"
        case .sxEightyCodecBold: return "sx-eighty-codec-bold"
        case .sxEightyCodecLight: return "sx-eighty-codec-light"
        case .sxEightyCodecRegular: return "sx-eighty-codec-regular"
        case .sxTenBold: return "sx-ten-bold"
        case .sxTenLight: return "sx-ten-light"
        case .sxTenRegular: return "sx-ten-regular"
        case .sxTwentyBold: return "sx-twenty-bold"
        case .sxTwentyLight: return "sx-twenty-light"
        case .sxTwentyRegular: return "sx-twenty-regular"
        case .tableBold: return "table-bold"
        case .tableLight: return "table-light"
        case .tableRegular: return "table-regular"
        case .tabletBold: return "tablet-bold"
        case .tabletLight: return "tablet-light"
        case .tabletRegular: return "tablet-regular"
        case .tabsBold: return "tabs-bold"
        case .tabsLight: return "tabs-light"
        case .tabsRegular: return "tabs-regular"
        case .tagBold: return "tag-bold"
        case .tagLight: return "tag-light"
        case .tagRegular: return "tag-regular"
        case .tapBold: return "tap-bold"
        case .tapFilled: return "tap-filled"
        case .tapLight: return "tap-light"
        case .tapRegular: return "tap-regular"
        case .telepresenceAlertBold: return "telepresence-alert-bold"
        case .telepresenceAlertLight: return "telepresence-alert-light"
        case .telepresenceAlertMutedBold: return "telepresence-alert-muted-bold"
        case .telepresenceAlertMutedLight: return "telepresence-alert-muted-light"
        case .telepresenceAlertMutedRegular: return "telepresence-alert-muted-regular"
        case .telepresenceAlertRegular: return "telepresence-alert-regular"
        case .telepresenceBold: return "telepresence-bold"
        case .telepresenceIxFiveThousandBold: return "telepresence-ix-five-thousand-bold"
        case .telepresenceIxFiveThousandLight: return "telepresence-ix-five-thousand-light"
        case .telepresenceIxFiveThousandRegular: return "telepresence-ix-five-thousand-regular"
        case .telepresenceLight: return "telepresence-light"
        case .telepresenceMutedBold: return "telepresence-muted-bold"
        case .telepresenceMutedLight: return "telepresence-muted-light"
        case .telepresenceMutedRegular: return "telepresence-muted-regular"
        case .telepresencePrivateBold: return "telepresence-private-bold"
        case .telepresencePrivateLight: return "telepresence-private-light"
        case .telepresencePrivateRegular: return "telepresence-private-regular"
        case .telepresenceRegular: return "telepresence-regular"
        case .temperatureBold: return "temperature-bold"
        case .temperatureLight: return "temperature-light"
        case .temperatureRegular: return "temperature-regular"
        case .testTubeBold: return "test-tube-bold"
        case .testTubeFilled: return "test-tube-filled"
        case .testTubeLight: return "test-tube-light"
        case .testTubeRegular: return "test-tube-regular"
        case .textAlignCenterBold: return "text-align-center-bold"
        case .textAlignCenterFilled: return "text-align-center-filled"
        case .textAlignCenterLight: return "text-align-center-light"
        case .textAlignCenterRegular: return "text-align-center-regular"
        case .textAlignLeftBold: return "text-align-left-bold"
        case .textAlignLeftFilled: return "text-align-left-filled"
        case .textAlignLeftLight: return "text-align-left-light"
        case .textAlignLeftRegular: return "text-align-left-regular"
        case .textAlignRightBold: return "text-align-right-bold"
        case .textAlignRightFilled: return "text-align-right-filled"
        case .textAlignRightLight: return "text-align-right-light"
        case .textAlignRightRegular: return "text-align-right-regular"
        case .textBold: return "text-bold"
        case .textBoxCursorLight: return "text-box-cursor-light"
        case .textCodeBlockBold: return "text-code-block-bold"
        case .textCodeBlockLight: return "text-code-block-light"
        case .textCodeBlockRegular: return "text-code-block-regular"
        case .textHighlightBold: return "text-highlight-bold"
        case .textHighlightFilled: return "text-highlight-filled"
        case .textHighlightLight: return "text-highlight-light"
        case .textHighlightRegular: return "text-highlight-regular"
        case .textLight: return "text-light"
        case .textRegular: return "text-regular"
        case .threeColumnBold: return "three-column-bold"
        case .threeColumnLight: return "three-column-light"
        case .threeColumnRegular: return "three-column-regular"
        case .threeDObjectBold: return "three-d-object-bold"
        case .threeDObjectLight: return "three-d-object-light"
        case .threeDObjectRegular: return "three-d-object-regular"
        case .timeExclusionBold: return "time-exclusion-bold"
        case .timeExclusionLight: return "time-exclusion-light"
        case .timeExclusionRegular: return "time-exclusion-regular"
        case .tooFastBold: return "too-fast-bold"
        case .tooFastLight: return "too-fast-light"
        case .tooFastRegular: return "too-fast-regular"
        case .tooSlowBold: return "too-slow-bold"
        case .tooSlowLight: return "too-slow-light"
        case .tooSlowRegular: return "too-slow-regular"
        case .toolsBold: return "tools-bold"
        case .toolsFilled: return "tools-filled"
        case .toolsLight: return "tools-light"
        case .toolsRegular: return "tools-regular"
        case .touchTenBold: return "touch-ten-bold"
        case .touchTenLight: return "touch-ten-light"
        case .touchTenRegular: return "touch-ten-regular"
        case .transcriptBold: return "transcript-bold"
        case .transcriptFilled: return "transcript-filled"
        case .transcriptLight: return "transcript-light"
        case .transcriptRegular: return "transcript-regular"
        case .translateBold: return "translate-bold"
        case .translateLight: return "translate-light"
        case .translateRegular: return "translate-regular"
        case .trendingBold: return "trending-bold"
        case .trendingLight: return "trending-light"
        case .trendingRegular: return "trending-regular"
        case .trimBold: return "trim-bold"
        case .trimLight: return "trim-light"
        case .trimRegular: return "trim-regular"
        case .twoColumnBold: return "two-column-bold"
        case .twoColumnLight: return "two-column-light"
        case .twoColumnRegular: return "two-column-regular"
        case .twoWayVoiceStreamBold: return "two-way-voice-stream-bold"
        case .twoWayVoiceStreamFilled: return "two-way-voice-stream-filled"
        case .twoWayVoiceStreamLight: return "two-way-voice-stream-light"
        case .twoWayVoiceStreamRegular: return "two-way-voice-stream-regular"
        case .ucmCloudBold: return "ucm-cloud-bold"
        case .ucmCloudLight: return "ucm-cloud-light"
        case .ucmCloudRegular: return "ucm-cloud-regular"
        case .underlineBold: return "underline-bold"
        case .underlineFilled: return "underline-filled"
        case .underlineLight: return "underline-light"
        case .underlineRegular: return "underline-regular"
        case .undoBold: return "undo-bold"
        case .undoLight: return "undo-light"
        case .undoRegular: return "undo-regular"
        case .unlinkBold: return "unlink-bold"
        case .unlinkLight: return "unlink-light"
        case .unlinkRegular: return "unlink-regular"
        case .unreadBold: return "unread-bold"
        case .unreadFilled: return "unread-filled"
        case .unreadLight: return "unread-light"
        case .unreadRegular: return "unread-regular"
        case .unsecureUnlockedBold: return "unsecure-unlocked-bold"
        case .unsecureUnlockedFilled: return "unsecure-unlocked-filled"
        case .unsecureUnlockedLight: return "unsecure-unlocked-light"
        case .unsecureUnlockedRegular: return "unsecure-unlocked-regular"
        case .unsortedBold: return "unsorted-bold"
        case .unsortedLight: return "unsorted-light"
        case .unsortedRegular: return "unsorted-regular"
        case .updateFileShareBold: return "update-file-share-bold"
        case .updateFileShareLight: return "update-file-share-light"
        case .updateFileShareRegular: return "update-file-share-regular"
        case .uploadBold: return "upload-bold"
        case .uploadImageBold: return "upload-image-bold"
        case .uploadImageLight: return "upload-image-light"
        case .uploadImageRegular: return "upload-image-regular"
        case .uploadLight: return "upload-light"
        case .uploadRegular: return "upload-regular"
        case .urgentVoicemailBold: return "urgent-voicemail-bold"
        case .urgentVoicemailFilled: return "urgent-voicemail-filled"
        case .usbBold: return "usb-bold"
        case .usbHeadsetBold: return "usb-headset-bold"
        case .usbHeadsetLight: return "usb-headset-light"
        case .usbHeadsetMutedBold: return "usb-headset-muted-bold"
        case .usbHeadsetMutedLight: return "usb-headset-muted-light"
        case .usbHeadsetMutedRegular: return "usb-headset-muted-regular"
        case .usbHeadsetRegular: return "usb-headset-regular"
        case .usbLight: return "usb-light"
        case .usbRegular: return "usb-regular"
        case .userBold: return "user-bold"
        case .userDeactivateBold: return "user-deactivate-bold"
        case .userDeactivateLight: return "user-deactivate-light"
        case .userDeactivateRegular: return "user-deactivate-regular"
        case .userLight: return "user-light"
        case .userRegular: return "user-regular"
        case .videoBlurBold: return "video-blur-bold"
        case .videoBlurFilled: return "video-blur-filled"
        case .videoBlurLight: return "video-blur-light"
        case .videoBlurRegular: return "video-blur-regular"
        case .videoBold: return "video-bold"
        case .videoEffectBold: return "video-effect-bold"
        case .videoEffectFilled: return "video-effect-filled"
        case .videoEffectLight: return "video-effect-light"
        case .videoEffectRegular: return "video-effect-regular"
        case .videoFilled: return "video-filled"
        case .videoLayoutBold: return "video-layout-bold"
        case .videoLayoutEqualBold: return "video-layout-equal-bold"
        case .videoLayoutEqualDualBold: return "video-layout-equal-dual-bold"
        case .videoLayoutEqualDualLight: return "video-layout-equal-dual-light"
        case .videoLayoutEqualDualRegular: return "video-layout-equal-dual-regular"
        case .videoLayoutEqualFilled: return "video-layout-equal-filled"
        case .videoLayoutEqualLight: return "video-layout-equal-light"
        case .videoLayoutEqualRegular: return "video-layout-equal-regular"
        case .videoLayoutFilled: return "video-layout-filled"
        case .videoLayoutLight: return "video-layout-light"
        case .videoLayoutOverlayBold: return "video-layout-overlay-bold"
        case .videoLayoutOverlayFilled: return "video-layout-overlay-filled"
        case .videoLayoutOverlayLight: return "video-layout-overlay-light"
        case .videoLayoutOverlayRegular: return "video-layout-overlay-regular"
        case .videoLayoutPresenterDominantBold: return "video-layout-presenter-dominant-bold"
        case .videoLayoutPresenterDominantLight: return "video-layout-presenter-dominant-light"
        case .videoLayoutPresenterDominantRegular: return "video-layout-presenter-dominant-regular"
        case .videoLayoutProminentBold: return "video-layout-prominent-bold"
        case .videoLayoutProminentFilled: return "video-layout-prominent-filled"
        case .videoLayoutProminentLight: return "video-layout-prominent-light"
        case .videoLayoutProminentRegular: return "video-layout-prominent-regular"
        case .videoLayoutRegular: return "video-layout-regular"
        case .videoLayoutShareDominantBold: return "video-layout-share-dominant-bold"
        case .videoLayoutShareDominantLight: return "video-layout-share-dominant-light"
        case .videoLayoutShareDominantRegular: return "video-layout-share-dominant-regular"
        case .videoLayoutSingleBold: return "video-layout-single-bold"
        case .videoLayoutSingleFilled: return "video-layout-single-filled"
        case .videoLayoutSingleLight: return "video-layout-single-light"
        case .videoLayoutSingleRegular: return "video-layout-single-regular"
        case .videoLayoutStackBold: return "video-layout-stack-bold"
        case .videoLayoutStackFilled: return "video-layout-stack-filled"
        case .videoLayoutStackLight: return "video-layout-stack-light"
        case .videoLayoutStackRegular: return "video-layout-stack-regular"
        case .videoLayoutVideoDominantBold: return "video-layout-video-dominant-bold"
        case .videoLayoutVideoDominantFilled: return "video-layout-video-dominant-filled"
        case .videoLayoutVideoDominantLight: return "video-layout-video-dominant-light"
        case .videoLayoutVideoDominantRegular: return "video-layout-video-dominant-regular"
        case .videoLight: return "video-light"
        case .videoPlusBold: return "video-plus-bold"
        case .videoPlusFilled: return "video-plus-filled"
        case .videoPlusLight: return "video-plus-light"
        case .videoPlusRegular: return "video-plus-regular"
        case .videoRegular: return "video-regular"
        case .videoSpeakerTrackBold: return "video-speaker-track-bold"
        case .videoSpeakerTrackFilled: return "video-speaker-track-filled"
        case .videoSpeakerTrackLight: return "video-speaker-track-light"
        case .videoSpeakerTrackRegular: return "video-speaker-track-regular"
        case .videotronColored: return "videotron-colored"
        case .videotronHorizontal: return "videotron-horizontal"
        case .viewAllBold: return "view-all-bold"
        case .viewAllLight: return "view-all-light"
        case .viewAllRegular: return "view-all-regular"
        case .viewListBold: return "view-list-bold"
        case .viewListLight: return "view-list-light"
        case .viewListRegular: return "view-list-regular"
        case .viewStackedBold: return "view-stacked-bold"
        case .viewStackedFilled: return "view-stacked-filled"
        case .viewStackedLight: return "view-stacked-light"
        case .viewStackedRegular: return "view-stacked-regular"
        case .viewThumbnailBold: return "view-thumbnail-bold"
        case .viewThumbnailFilled: return "view-thumbnail-filled"
        case .viewThumbnailLight: return "view-thumbnail-light"
        case .viewThumbnailRegular: return "view-thumbnail-regular"
        case .visionproBold: return "visionpro-bold"
        case .visionproFilled: return "visionpro-filled"
        case .visionproLight: return "visionpro-light"
        case .visionproMoveCallInBold: return "visionpro-move-call-in-bold"
        case .visionproMoveCallInFilled: return "visionpro-move-call-in-filled"
        case .visionproMoveCallInLight: return "visionpro-move-call-in-light"
        case .visionproMoveCallInOutBold: return "visionpro-move-call-in-out-bold"
        case .visionproMoveCallInOutFilled: return "visionpro-move-call-in-out-filled"
        case .visionproMoveCallInOutLight: return "visionpro-move-call-in-out-light"
        case .visionproMoveCallInOutRegular: return "visionpro-move-call-in-out-regular"
        case .visionproMoveCallInRegular: return "visionpro-move-call-in-regular"
        case .visionproMoveCallOutBold: return "visionpro-move-call-out-bold"
        case .visionproMoveCallOutFilled: return "visionpro-move-call-out-filled"
        case .visionproMoveCallOutLight: return "visionpro-move-call-out-light"
        case .visionproMoveCallOutRegular: return "visionpro-move-call-out-regular"
        case .visionproRegular: return "visionpro-regular"
        case .voicemailBold: return "voicemail-bold"
        case .voicemailFilled: return "voicemail-filled"
        case .voicemailLight: return "voicemail-light"
        case .voicemailRegular: return "voicemail-regular"
        case .vscBold: return "vsc-bold"
        case .vscLight: return "vsc-light"
        case .vscRegular: return "vsc-regular"
        case .waffleMenuBold: return "waffle-menu-bold"
        case .waffleMenuLight: return "waffle-menu-light"
        case .waffleMenuRegular: return "waffle-menu-regular"
        case .waitingRoomBold: return "waiting-room-bold"
        case .waitingRoomLight: return "waiting-room-light"
        case .waitingRoomRegular: return "waiting-room-regular"
        case .wallpaperBold: return "wallpaper-bold"
        case .wallpaperLight: return "wallpaper-light"
        case .wallpaperRegular: return "wallpaper-regular"
        case .warningBadgeFilled: return "warning-badge-filled"
        case .warningBold: return "warning-bold"
        case .warningFilled: return "warning-filled"
        case .warningLight: return "warning-light"
        case .warningRegular: return "warning-regular"
        case .webexBoardBold: return "webex-board-bold"
        case .webexBoardLight: return "webex-board-light"
        case .webexBoardRegular: return "webex-board-regular"
        case .webexCodecPlusBold: return "webex-codec-plus-bold"
        case .webexCodecPlusLight: return "webex-codec-plus-light"
        case .webexCodecPlusRegular: return "webex-codec-plus-regular"
        case .webexDeskCameraBold: return "webex-desk-camera-bold"
        case .webexDeskCameraLight: return "webex-desk-camera-light"
        case .webexDeskCameraRegular: return "webex-desk-camera-regular"
        case .webexHelixBold: return "webex-helix-bold"
        case .webexHelixLight: return "webex-helix-light"
        case .webexHelixRegular: return "webex-helix-regular"
        case .webexMeetingsBold: return "webex-meetings-bold"
        case .webexMeetingsFilled: return "webex-meetings-filled"
        case .webexMeetingsLight: return "webex-meetings-light"
        case .webexMeetingsRegular: return "webex-meetings-regular"
        case .webexQuadCameraBold: return "webex-quad-camera-bold"
        case .webexQuadCameraLight: return "webex-quad-camera-light"
        case .webexQuadCameraRegular: return "webex-quad-camera-regular"
        case .webexRoomKitBold: return "webex-room-kit-bold"
        case .webexRoomKitLight: return "webex-room-kit-light"
        case .webexRoomKitPlusBold: return "webex-room-kit-plus-bold"
        case .webexRoomKitPlusLight: return "webex-room-kit-plus-light"
        case .webexRoomKitPlusRegular: return "webex-room-kit-plus-regular"
        case .webexRoomKitRegular: return "webex-room-kit-regular"
        case .webexShareBold: return "webex-share-bold"
        case .webexShareLight: return "webex-share-light"
        case .webexShareRegular: return "webex-share-regular"
        case .webexTeamsBold: return "webex-teams-bold"
        case .webexTeamsFilled: return "webex-teams-filled"
        case .webexTeamsLight: return "webex-teams-light"
        case .webexTeamsNewBold: return "webex-teams-new-bold"
        case .webexTeamsNewFilled: return "webex-teams-new-filled"
        case .webexTeamsNewLight: return "webex-teams-new-light"
        case .webexTeamsNewRegular: return "webex-teams-new-regular"
        case .webexTeamsRegular: return "webex-teams-regular"
        case .webexTeamsRemoveBold: return "webex-teams-remove-bold"
        case .webexTeamsRemoveLight: return "webex-teams-remove-light"
        case .webexTeamsRemoveRegular: return "webex-teams-remove-regular"
        case .webinarBold: return "webinar-bold"
        case .webinarFilled: return "webinar-filled"
        case .webinarLight: return "webinar-light"
        case .webinarRegular: return "webinar-regular"
        case .weeklyRecurringScheduleBold: return "weekly-recurring-schedule-bold"
        case .weeklyRecurringScheduleLight: return "weekly-recurring-schedule-light"
        case .weeklyRecurringScheduleRegular: return "weekly-recurring-schedule-regular"
        case .whisperCoachBold: return "whisper-coach-bold"
        case .whisperCoachFilled: return "whisper-coach-filled"
        case .whisperCoachLight: return "whisper-coach-light"
        case .whisperCoachRegular: return "whisper-coach-regular"
        case .whiteboardBold: return "whiteboard-bold"
        case .whiteboardContentBold: return "whiteboard-content-bold"
        case .whiteboardContentFilled: return "whiteboard-content-filled"
        case .whiteboardContentLight: return "whiteboard-content-light"
        case .whiteboardContentRegular: return "whiteboard-content-regular"
        case .whiteboardFilled: return "whiteboard-filled"
        case .whiteboardLight: return "whiteboard-light"
        case .whiteboardRegular: return "whiteboard-regular"
        case .widgetBold: return "widget-bold"
        case .widgetFilled: return "widget-filled"
        case .widgetLight: return "widget-light"
        case .widgetRegular: return "widget-regular"
        case .wifiBold: return "wifi-bold"
        case .wifiErrorBold: return "wifi-error-bold"
        case .wifiErrorLight: return "wifi-error-light"
        case .wifiErrorRegular: return "wifi-error-regular"
        case .wifiLight: return "wifi-light"
        case .wifiRegular: return "wifi-regular"
        case .wifiSignalGoodBold: return "wifi-signal-good-bold"
        case .wifiSignalGoodLight: return "wifi-signal-good-light"
        case .wifiSignalGoodRegular: return "wifi-signal-good-regular"
        case .wifiSignalPoorBold: return "wifi-signal-poor-bold"
        case .wifiSignalPoorLight: return "wifi-signal-poor-light"
        case .wifiSignalPoorRegular: return "wifi-signal-poor-regular"
        case .wifiSignalUnstableBold: return "wifi-signal-unstable-bold"
        case .wifiSignalUnstableLight: return "wifi-signal-unstable-light"
        case .wifiSignalUnstableRegular: return "wifi-signal-unstable-regular"
        case .windowCornerScrubBold: return "window-corner-scrub-bold"
        case .windowCornerScrubLight: return "window-corner-scrub-light"
        case .windowCornerScrubRegular: return "window-corner-scrub-regular"
        case .windowRightCornerScrubBold: return "window-right-corner-scrub-bold"
        case .windowRightCornerScrubLight: return "window-right-corner-scrub-light"
        case .windowRightCornerScrubRegular: return "window-right-corner-scrub-regular"
        case .windowVerticalScrubBold: return "window-vertical-scrub-bold"
        case .windowVerticalScrubLight: return "window-vertical-scrub-light"
        case .windowVerticalScrubRegular: return "window-vertical-scrub-regular"
        case .workflowDeploymentsBold: return "workflow-deployments-bold"
        case .workflowDeploymentsFilled: return "workflow-deployments-filled"
        case .workflowDeploymentsLight: return "workflow-deployments-light"
        case .workflowDeploymentsRegular: return "workflow-deployments-regular"
        case .workphoneBold: return "workphone-bold"
        case .workphoneLight: return "workphone-light"
        case .workphoneRegular: return "workphone-regular"
        case .zoomColored: return "zoom-colored"
        case .zoomInBold: return "zoom-in-bold"
        case .zoomInLight: return "zoom-in-light"
        case .zoomInRegular: return "zoom-in-regular"
        case .zoomOutBold: return "zoom-out-bold"
        case .zoomOutLight: return "zoom-out-light"
        case .zoomOutRegular: return "zoom-out-regular"

        default:
            // We need a default case to prevent the Xcode11 error: "the compiler is unable to check that this switch is exhaustive in reasonable time"
            assertionFailure("Unknown icon type: \(self)")
            return ""
        }
    }

    private static var suppressAssert: Bool = false

    public static func fromFileName(fileName: String) -> MomentumIconsType? {
        MomentumIconsType.suppressAssert = true
        let iconType = MomentumIconsType.allCases.first{ "\($0.filename)" == fileName }
        MomentumIconsType.suppressAssert = false
        return iconType
    }
}