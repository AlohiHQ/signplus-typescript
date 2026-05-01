import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { TemplateIdService } from './services/template-id';
import { SignedDocumentsService } from './services/signed-documents';
import { CertificateService } from './services/certificate';
import { DocumentIdService } from './services/document-id';
import { DocumentService } from './services/document';
import { DocumentsService } from './services/documents';
import { DynamicFieldsService } from './services/dynamic-fields';
import { SigningStepsService } from './services/signing-steps';
import { SettingsService } from './services/settings';
import { PlaceholdersService } from './services/placeholders';
import { FileIdService } from './services/file-id';
import { SendService } from './services/send';
import { DuplicateService } from './services/duplicate';
import { Void_Service } from './services/void_';
import { RenameService } from './services/rename';
import { SetCommentService } from './services/set-comment';
import { SetNotificationService } from './services/set-notification';
import { SetExpirationDateService } from './services/set-expiration-date';
import { SetLegalityLevelService } from './services/set-legality-level';
import { EnvelopeEnvelopeIdAnnotationsDocumentIdService } from './services/envelope-envelope-id-annotations-document-id';
import { AnnotationsService } from './services/annotations';
import { AnnotationIdService } from './services/annotation-id';
import { AnnotationService } from './services/annotation';
import { EnvelopeIdService } from './services/envelope-id';
import { EnvelopeService } from './services/envelope';
import { EnvelopesService } from './services/envelopes';
import { TemplateTemplateIdDuplicateService } from './services/template-template-id-duplicate';
import { TemplateTemplateIdDocumentDocumentIdService } from './services/template-template-id-document-document-id';
import { TemplateTemplateIdDocumentService } from './services/template-template-id-document';
import { TemplateTemplateIdDocumentsService } from './services/template-template-id-documents';
import { TemplateTemplateIdSigningStepsService } from './services/template-template-id-signing-steps';
import { TemplateTemplateIdRenameService } from './services/template-template-id-rename';
import { TemplateTemplateIdSetCommentService } from './services/template-template-id-set-comment';
import { TemplateTemplateIdSetNotificationService } from './services/template-template-id-set-notification';
import { TemplateTemplateIdAnnotationsDocumentIdService } from './services/template-template-id-annotations-document-id';
import { TemplateTemplateIdAnnotationsService } from './services/template-template-id-annotations';
import { TemplateTemplateIdAnnotationAnnotationIdService } from './services/template-template-id-annotation-annotation-id';
import { TemplateTemplateIdAnnotationService } from './services/template-template-id-annotation';
import { TemplateTemplateIdAttachmentsSettingsService } from './services/template-template-id-attachments-settings';
import { TemplateTemplateIdAttachmentsPlaceholdersService } from './services/template-template-id-attachments-placeholders';
import { TemplateTemplateIdService } from './services/template-template-id';
import { TemplateService } from './services/template';
import { TemplatesService } from './services/templates';
import { WebhookIdService } from './services/webhook-id';
import { WebhookService } from './services/webhook';
import { WebhooksService } from './services/webhooks';

export * from './services/template-id';
export * from './services/signed-documents';
export * from './services/certificate';
export * from './services/document-id';
export * from './services/document';
export * from './services/documents';
export * from './services/dynamic-fields';
export * from './services/signing-steps';
export * from './services/settings';
export * from './services/placeholders';
export * from './services/file-id';
export * from './services/send';
export * from './services/duplicate';
export * from './services/void_';
export * from './services/rename';
export * from './services/set-comment';
export * from './services/set-notification';
export * from './services/set-expiration-date';
export * from './services/set-legality-level';
export * from './services/envelope-envelope-id-annotations-document-id';
export * from './services/annotations';
export * from './services/annotation-id';
export * from './services/annotation';
export * from './services/envelope-id';
export * from './services/envelope';
export * from './services/envelopes';
export * from './services/template-template-id-duplicate';
export * from './services/template-template-id-document-document-id';
export * from './services/template-template-id-document';
export * from './services/template-template-id-documents';
export * from './services/template-template-id-signing-steps';
export * from './services/template-template-id-rename';
export * from './services/template-template-id-set-comment';
export * from './services/template-template-id-set-notification';
export * from './services/template-template-id-annotations-document-id';
export * from './services/template-template-id-annotations';
export * from './services/template-template-id-annotation-annotation-id';
export * from './services/template-template-id-annotation';
export * from './services/template-template-id-attachments-settings';
export * from './services/template-template-id-attachments-placeholders';
export * from './services/template-template-id';
export * from './services/template';
export * from './services/templates';
export * from './services/webhook-id';
export * from './services/webhook';
export * from './services/webhooks';

export * from './http';
export { Environment } from './http/environment';

export class Signplus {
  public readonly templateId: TemplateIdService;

  public readonly signedDocuments: SignedDocumentsService;

  public readonly certificate: CertificateService;

  public readonly documentId: DocumentIdService;

  public readonly document: DocumentService;

  public readonly documents: DocumentsService;

  public readonly dynamicFields: DynamicFieldsService;

  public readonly signingSteps: SigningStepsService;

  public readonly settings: SettingsService;

  public readonly placeholders: PlaceholdersService;

  public readonly fileId: FileIdService;

  public readonly send: SendService;

  public readonly duplicate: DuplicateService;

  public readonly void_: Void_Service;

  public readonly rename: RenameService;

  public readonly setComment: SetCommentService;

  public readonly setNotification: SetNotificationService;

  public readonly setExpirationDate: SetExpirationDateService;

  public readonly setLegalityLevel: SetLegalityLevelService;

  public readonly envelopeEnvelopeIdAnnotationsDocumentId: EnvelopeEnvelopeIdAnnotationsDocumentIdService;

  public readonly annotations: AnnotationsService;

  public readonly annotationId: AnnotationIdService;

  public readonly annotation: AnnotationService;

  public readonly envelopeId: EnvelopeIdService;

  public readonly envelope: EnvelopeService;

  public readonly envelopes: EnvelopesService;

  public readonly templateTemplateIdDuplicate: TemplateTemplateIdDuplicateService;

  public readonly templateTemplateIdDocumentDocumentId: TemplateTemplateIdDocumentDocumentIdService;

  public readonly templateTemplateIdDocument: TemplateTemplateIdDocumentService;

  public readonly templateTemplateIdDocuments: TemplateTemplateIdDocumentsService;

  public readonly templateTemplateIdSigningSteps: TemplateTemplateIdSigningStepsService;

  public readonly templateTemplateIdRename: TemplateTemplateIdRenameService;

  public readonly templateTemplateIdSetComment: TemplateTemplateIdSetCommentService;

  public readonly templateTemplateIdSetNotification: TemplateTemplateIdSetNotificationService;

  public readonly templateTemplateIdAnnotationsDocumentId: TemplateTemplateIdAnnotationsDocumentIdService;

  public readonly templateTemplateIdAnnotations: TemplateTemplateIdAnnotationsService;

  public readonly templateTemplateIdAnnotationAnnotationId: TemplateTemplateIdAnnotationAnnotationIdService;

  public readonly templateTemplateIdAnnotation: TemplateTemplateIdAnnotationService;

  public readonly templateTemplateIdAttachmentsSettings: TemplateTemplateIdAttachmentsSettingsService;

  public readonly templateTemplateIdAttachmentsPlaceholders: TemplateTemplateIdAttachmentsPlaceholdersService;

  public readonly templateTemplateId: TemplateTemplateIdService;

  public readonly template: TemplateService;

  public readonly templates: TemplatesService;

  public readonly webhookId: WebhookIdService;

  public readonly webhook: WebhookService;

  public readonly webhooks: WebhooksService;

  constructor(public config: SdkConfig) {
    this.templateId = new TemplateIdService(this.config);

    this.signedDocuments = new SignedDocumentsService(this.config);

    this.certificate = new CertificateService(this.config);

    this.documentId = new DocumentIdService(this.config);

    this.document = new DocumentService(this.config);

    this.documents = new DocumentsService(this.config);

    this.dynamicFields = new DynamicFieldsService(this.config);

    this.signingSteps = new SigningStepsService(this.config);

    this.settings = new SettingsService(this.config);

    this.placeholders = new PlaceholdersService(this.config);

    this.fileId = new FileIdService(this.config);

    this.send = new SendService(this.config);

    this.duplicate = new DuplicateService(this.config);

    this.void_ = new Void_Service(this.config);

    this.rename = new RenameService(this.config);

    this.setComment = new SetCommentService(this.config);

    this.setNotification = new SetNotificationService(this.config);

    this.setExpirationDate = new SetExpirationDateService(this.config);

    this.setLegalityLevel = new SetLegalityLevelService(this.config);

    this.envelopeEnvelopeIdAnnotationsDocumentId =
      new EnvelopeEnvelopeIdAnnotationsDocumentIdService(this.config);

    this.annotations = new AnnotationsService(this.config);

    this.annotationId = new AnnotationIdService(this.config);

    this.annotation = new AnnotationService(this.config);

    this.envelopeId = new EnvelopeIdService(this.config);

    this.envelope = new EnvelopeService(this.config);

    this.envelopes = new EnvelopesService(this.config);

    this.templateTemplateIdDuplicate = new TemplateTemplateIdDuplicateService(this.config);

    this.templateTemplateIdDocumentDocumentId = new TemplateTemplateIdDocumentDocumentIdService(
      this.config,
    );

    this.templateTemplateIdDocument = new TemplateTemplateIdDocumentService(this.config);

    this.templateTemplateIdDocuments = new TemplateTemplateIdDocumentsService(this.config);

    this.templateTemplateIdSigningSteps = new TemplateTemplateIdSigningStepsService(this.config);

    this.templateTemplateIdRename = new TemplateTemplateIdRenameService(this.config);

    this.templateTemplateIdSetComment = new TemplateTemplateIdSetCommentService(this.config);

    this.templateTemplateIdSetNotification = new TemplateTemplateIdSetNotificationService(
      this.config,
    );

    this.templateTemplateIdAnnotationsDocumentId =
      new TemplateTemplateIdAnnotationsDocumentIdService(this.config);

    this.templateTemplateIdAnnotations = new TemplateTemplateIdAnnotationsService(this.config);

    this.templateTemplateIdAnnotationAnnotationId =
      new TemplateTemplateIdAnnotationAnnotationIdService(this.config);

    this.templateTemplateIdAnnotation = new TemplateTemplateIdAnnotationService(this.config);

    this.templateTemplateIdAttachmentsSettings = new TemplateTemplateIdAttachmentsSettingsService(
      this.config,
    );

    this.templateTemplateIdAttachmentsPlaceholders =
      new TemplateTemplateIdAttachmentsPlaceholdersService(this.config);

    this.templateTemplateId = new TemplateTemplateIdService(this.config);

    this.template = new TemplateService(this.config);

    this.templates = new TemplatesService(this.config);

    this.webhookId = new WebhookIdService(this.config);

    this.webhook = new WebhookService(this.config);

    this.webhooks = new WebhooksService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.templateId.baseUrl = baseUrl;
    this.signedDocuments.baseUrl = baseUrl;
    this.certificate.baseUrl = baseUrl;
    this.documentId.baseUrl = baseUrl;
    this.document.baseUrl = baseUrl;
    this.documents.baseUrl = baseUrl;
    this.dynamicFields.baseUrl = baseUrl;
    this.signingSteps.baseUrl = baseUrl;
    this.settings.baseUrl = baseUrl;
    this.placeholders.baseUrl = baseUrl;
    this.fileId.baseUrl = baseUrl;
    this.send.baseUrl = baseUrl;
    this.duplicate.baseUrl = baseUrl;
    this.void_.baseUrl = baseUrl;
    this.rename.baseUrl = baseUrl;
    this.setComment.baseUrl = baseUrl;
    this.setNotification.baseUrl = baseUrl;
    this.setExpirationDate.baseUrl = baseUrl;
    this.setLegalityLevel.baseUrl = baseUrl;
    this.envelopeEnvelopeIdAnnotationsDocumentId.baseUrl = baseUrl;
    this.annotations.baseUrl = baseUrl;
    this.annotationId.baseUrl = baseUrl;
    this.annotation.baseUrl = baseUrl;
    this.envelopeId.baseUrl = baseUrl;
    this.envelope.baseUrl = baseUrl;
    this.envelopes.baseUrl = baseUrl;
    this.templateTemplateIdDuplicate.baseUrl = baseUrl;
    this.templateTemplateIdDocumentDocumentId.baseUrl = baseUrl;
    this.templateTemplateIdDocument.baseUrl = baseUrl;
    this.templateTemplateIdDocuments.baseUrl = baseUrl;
    this.templateTemplateIdSigningSteps.baseUrl = baseUrl;
    this.templateTemplateIdRename.baseUrl = baseUrl;
    this.templateTemplateIdSetComment.baseUrl = baseUrl;
    this.templateTemplateIdSetNotification.baseUrl = baseUrl;
    this.templateTemplateIdAnnotationsDocumentId.baseUrl = baseUrl;
    this.templateTemplateIdAnnotations.baseUrl = baseUrl;
    this.templateTemplateIdAnnotationAnnotationId.baseUrl = baseUrl;
    this.templateTemplateIdAnnotation.baseUrl = baseUrl;
    this.templateTemplateIdAttachmentsSettings.baseUrl = baseUrl;
    this.templateTemplateIdAttachmentsPlaceholders.baseUrl = baseUrl;
    this.templateTemplateId.baseUrl = baseUrl;
    this.template.baseUrl = baseUrl;
    this.templates.baseUrl = baseUrl;
    this.webhookId.baseUrl = baseUrl;
    this.webhook.baseUrl = baseUrl;
    this.webhooks.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.templateId.baseUrl = environment;
    this.signedDocuments.baseUrl = environment;
    this.certificate.baseUrl = environment;
    this.documentId.baseUrl = environment;
    this.document.baseUrl = environment;
    this.documents.baseUrl = environment;
    this.dynamicFields.baseUrl = environment;
    this.signingSteps.baseUrl = environment;
    this.settings.baseUrl = environment;
    this.placeholders.baseUrl = environment;
    this.fileId.baseUrl = environment;
    this.send.baseUrl = environment;
    this.duplicate.baseUrl = environment;
    this.void_.baseUrl = environment;
    this.rename.baseUrl = environment;
    this.setComment.baseUrl = environment;
    this.setNotification.baseUrl = environment;
    this.setExpirationDate.baseUrl = environment;
    this.setLegalityLevel.baseUrl = environment;
    this.envelopeEnvelopeIdAnnotationsDocumentId.baseUrl = environment;
    this.annotations.baseUrl = environment;
    this.annotationId.baseUrl = environment;
    this.annotation.baseUrl = environment;
    this.envelopeId.baseUrl = environment;
    this.envelope.baseUrl = environment;
    this.envelopes.baseUrl = environment;
    this.templateTemplateIdDuplicate.baseUrl = environment;
    this.templateTemplateIdDocumentDocumentId.baseUrl = environment;
    this.templateTemplateIdDocument.baseUrl = environment;
    this.templateTemplateIdDocuments.baseUrl = environment;
    this.templateTemplateIdSigningSteps.baseUrl = environment;
    this.templateTemplateIdRename.baseUrl = environment;
    this.templateTemplateIdSetComment.baseUrl = environment;
    this.templateTemplateIdSetNotification.baseUrl = environment;
    this.templateTemplateIdAnnotationsDocumentId.baseUrl = environment;
    this.templateTemplateIdAnnotations.baseUrl = environment;
    this.templateTemplateIdAnnotationAnnotationId.baseUrl = environment;
    this.templateTemplateIdAnnotation.baseUrl = environment;
    this.templateTemplateIdAttachmentsSettings.baseUrl = environment;
    this.templateTemplateIdAttachmentsPlaceholders.baseUrl = environment;
    this.templateTemplateId.baseUrl = environment;
    this.template.baseUrl = environment;
    this.templates.baseUrl = environment;
    this.webhookId.baseUrl = environment;
    this.webhook.baseUrl = environment;
    this.webhooks.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.templateId.timeoutMs = timeoutMs;
    this.signedDocuments.timeoutMs = timeoutMs;
    this.certificate.timeoutMs = timeoutMs;
    this.documentId.timeoutMs = timeoutMs;
    this.document.timeoutMs = timeoutMs;
    this.documents.timeoutMs = timeoutMs;
    this.dynamicFields.timeoutMs = timeoutMs;
    this.signingSteps.timeoutMs = timeoutMs;
    this.settings.timeoutMs = timeoutMs;
    this.placeholders.timeoutMs = timeoutMs;
    this.fileId.timeoutMs = timeoutMs;
    this.send.timeoutMs = timeoutMs;
    this.duplicate.timeoutMs = timeoutMs;
    this.void_.timeoutMs = timeoutMs;
    this.rename.timeoutMs = timeoutMs;
    this.setComment.timeoutMs = timeoutMs;
    this.setNotification.timeoutMs = timeoutMs;
    this.setExpirationDate.timeoutMs = timeoutMs;
    this.setLegalityLevel.timeoutMs = timeoutMs;
    this.envelopeEnvelopeIdAnnotationsDocumentId.timeoutMs = timeoutMs;
    this.annotations.timeoutMs = timeoutMs;
    this.annotationId.timeoutMs = timeoutMs;
    this.annotation.timeoutMs = timeoutMs;
    this.envelopeId.timeoutMs = timeoutMs;
    this.envelope.timeoutMs = timeoutMs;
    this.envelopes.timeoutMs = timeoutMs;
    this.templateTemplateIdDuplicate.timeoutMs = timeoutMs;
    this.templateTemplateIdDocumentDocumentId.timeoutMs = timeoutMs;
    this.templateTemplateIdDocument.timeoutMs = timeoutMs;
    this.templateTemplateIdDocuments.timeoutMs = timeoutMs;
    this.templateTemplateIdSigningSteps.timeoutMs = timeoutMs;
    this.templateTemplateIdRename.timeoutMs = timeoutMs;
    this.templateTemplateIdSetComment.timeoutMs = timeoutMs;
    this.templateTemplateIdSetNotification.timeoutMs = timeoutMs;
    this.templateTemplateIdAnnotationsDocumentId.timeoutMs = timeoutMs;
    this.templateTemplateIdAnnotations.timeoutMs = timeoutMs;
    this.templateTemplateIdAnnotationAnnotationId.timeoutMs = timeoutMs;
    this.templateTemplateIdAnnotation.timeoutMs = timeoutMs;
    this.templateTemplateIdAttachmentsSettings.timeoutMs = timeoutMs;
    this.templateTemplateIdAttachmentsPlaceholders.timeoutMs = timeoutMs;
    this.templateTemplateId.timeoutMs = timeoutMs;
    this.template.timeoutMs = timeoutMs;
    this.templates.timeoutMs = timeoutMs;
    this.webhookId.timeoutMs = timeoutMs;
    this.webhook.timeoutMs = timeoutMs;
    this.webhooks.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.templateId.token = token;
    this.signedDocuments.token = token;
    this.certificate.token = token;
    this.documentId.token = token;
    this.document.token = token;
    this.documents.token = token;
    this.dynamicFields.token = token;
    this.signingSteps.token = token;
    this.settings.token = token;
    this.placeholders.token = token;
    this.fileId.token = token;
    this.send.token = token;
    this.duplicate.token = token;
    this.void_.token = token;
    this.rename.token = token;
    this.setComment.token = token;
    this.setNotification.token = token;
    this.setExpirationDate.token = token;
    this.setLegalityLevel.token = token;
    this.envelopeEnvelopeIdAnnotationsDocumentId.token = token;
    this.annotations.token = token;
    this.annotationId.token = token;
    this.annotation.token = token;
    this.envelopeId.token = token;
    this.envelope.token = token;
    this.envelopes.token = token;
    this.templateTemplateIdDuplicate.token = token;
    this.templateTemplateIdDocumentDocumentId.token = token;
    this.templateTemplateIdDocument.token = token;
    this.templateTemplateIdDocuments.token = token;
    this.templateTemplateIdSigningSteps.token = token;
    this.templateTemplateIdRename.token = token;
    this.templateTemplateIdSetComment.token = token;
    this.templateTemplateIdSetNotification.token = token;
    this.templateTemplateIdAnnotationsDocumentId.token = token;
    this.templateTemplateIdAnnotations.token = token;
    this.templateTemplateIdAnnotationAnnotationId.token = token;
    this.templateTemplateIdAnnotation.token = token;
    this.templateTemplateIdAttachmentsSettings.token = token;
    this.templateTemplateIdAttachmentsPlaceholders.token = token;
    this.templateTemplateId.token = token;
    this.template.token = token;
    this.templates.token = token;
    this.webhookId.token = token;
    this.webhook.token = token;
    this.webhooks.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
